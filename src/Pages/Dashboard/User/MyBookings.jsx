import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuthHook from "../../../Hooks/useAuthHook";
import { Link } from "react-router";
import { MdEditNote, MdOutlineDelete } from "react-icons/md";

export default function MyBookings() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHook();
  const { data } = useQuery({
    queryKey: ["my_bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mybookings/?email=${user.email}`);
      return res.data;
    },
  });
  // console.log(data);

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

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
                        className="btn btn-error"
                      >
                        Pay
                      </button>
                    )}
                  </td>
                  <td>{mybooings.deliveryStatus}</td>
                  <td className="flex gap-2">
                    <Link className="btn  btn-square btn-primary">
                      <MdEditNote />
                    </Link>
                    <button className="btn btn-square btn-error">
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
