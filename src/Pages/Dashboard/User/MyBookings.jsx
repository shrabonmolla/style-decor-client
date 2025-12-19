import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuthHook from "../../../Hooks/useAuthHook";
import { Link } from "react-router";
import { MdEditNote, MdOutlineDelete } from "react-icons/md";
import Loading from "../../../Components/Shared/Loading/Loading";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Title from "../../../Components/Shared/Title/Title";

export default function MyBookings() {
  const [currentBooking, setCurrentBookings] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHook();
  const bookRef = useRef();
  const { register, handleSubmit } = useForm();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["my_bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mybookings/?email=${user.email}`);
      return res.data;
    },
  });
  // console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  // handlePayment
  async function handlePayment(myBookings) {
    const paymentInfo = {
      serviceName: myBookings.serviceName,
      serviceCost: myBookings.serviceCost,
      serviceId: myBookings._id,
      customerName: myBookings.name,
      customerEmail: myBookings.email,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  }

  function handleOpenBookingUpdateModal(myBookings) {
    setCurrentBookings(myBookings);
    bookRef.current.showModal();
  }

  function handleUpdateMyBookings(updatedData) {
    console.log(updatedData);

    axiosSecure
      .patch(`/mybookings/${currentBooking._id}`, updatedData)
      .then((res) => {
        console.log("booking info updated", res.data);
        toast.success("Successfully updated bookings info");
        bookRef.current.close();
      });
  }

  function handleDelete(id) {
    axiosSecure.delete(`/mybookings/${id}`).then((res) => {
      console.log("You Cancel This bookings", res);
      toast.error("You Cancel This Bookings");
      refetch();
    });
  }

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <Title text={`My Bookings : ${data?.length}`} />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Payment Status</th>
            <th>Delivery Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((mybooings, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <th>{mybooings.serviceName}</th>
                  <td>{mybooings.serviceCost}</td>
                  <td>{mybooings.date}</td>
                  <td>
                    {mybooings.paymentStatus === "paid" ? (
                      <span className="text-green-500">Paid</span>
                    ) : (
                      <button
                        onClick={() => handlePayment(mybooings)}
                        className="btn btn-error text-white"
                      >
                        Pay
                      </button>
                    )}
                  </td>
                  <td>{mybooings.deliveryStatus}</td>
                  <td className="flex gap-2">
                    <Link
                      onClick={() => handleOpenBookingUpdateModal(mybooings)}
                      className="btn  btn-square btn-primary"
                    >
                      <MdEditNote />
                    </Link>
                    <button
                      onClick={() => handleDelete(mybooings._id)}
                      className="btn btn-square btn-error text-white"
                    >
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <dialog ref={bookRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-2xl">
          <h3 className="text-2xl font-bold text-[#03045e] mb-4">
            Book Service
          </h3>

          <form
            onSubmit={handleSubmit(handleUpdateMyBookings)}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register("name")}
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                placeholder="Your Name"
                required
              />

              <input
                {...register("email")}
                defaultValue={user?.email}
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register("serviceName")}
                defaultValue={currentBooking?.serviceName}
                className="input input-bordered w-full"
                readOnly
              />

              <input
                disabled={true}
                {...register("serviceCost")}
                defaultValue={currentBooking?.serviceCost}
                className="input input-bordered w-full"
                readOnly
              />
            </div>

            <input
              {...register("date")}
              type="date"
              className="input input-bordered w-full"
              required
              defaultValue={currentBooking?.date}
            />

            <textarea
              {...register("location")}
              className="textarea textarea-bordered w-full"
              placeholder="Service Location"
              defaultValue={currentBooking?.location}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#03045e] hover:bg-[#023e8a] text-white py-3 rounded-xl font-semibold"
            >
              Update Booking
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
