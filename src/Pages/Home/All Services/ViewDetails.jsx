import React, { useRef } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAuthHook from "../../../Hooks/useAuthHook";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ViewDetails() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const bookRef = useRef();
  const { user } = useAuthHook();
  //   const [selected, setSelected] = useState();

  // getting services data form backend
  const { data } = useQuery({
    queryKey: ["services_detials", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services/${id}`);
      return res.data;
    },
  });
  console.log(data);
  const {
    serviceName,
    serviceCategory,
    serviceCost,
    photo,

    serviceDescription,

    unit,
  } = data || {};

  //   handleOpenModal
  function handleOpenModal() {
    bookRef.current.showModal();
  }

  //   handleBookService
  function handleBookService(bookingData) {
    // console.log(bookingData);
    axiosSecure
      .post(`/bookings `, bookingData)
      .then((res) => {
        console.log("you booked this services", res);
        toast.success("you booked this services")
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{serviceName}</h1>
            <p className="py-6">{serviceCost}</p>
            <p className="py-6">{serviceDescription}</p>
            <p className="py-6">{serviceCategory}</p>
            <p className="py-6">{unit}</p>
            <button onClick={handleOpenModal} className="btn btn-primary">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={bookRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleBookService)}>
            {/* user and service info */}
            <fieldset className="fieldset flex ">
              <div>
                {/* name */}
                <label className="label">Name</label>
                <input
                  {...register("name")}
                  defaultValue={user?.displayName}
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  type="email"
                  className="input"
                  placeholder="Email"
                />
              </div>

              <div>
                {/* name */}
                <label className="label">service Name</label>
                <input
                  {...register("serviceName")}
                  defaultValue={serviceName}
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                {/* email */}
                <label className="label">service Cost</label>
                <input
                  {...register("serviceCost")}
                  defaultValue={serviceCost}
                  type="number"
                  className="input"
                  placeholder="Email"
                />
              </div>
            </fieldset>
            {/* date and locaiton */}
            <div className="flex flex-col-reverse">
              <input {...register("date")} type="date" />
              <textarea
                {...register("location")}
                className="textarea w-full"
                placeholder="Location"
              ></textarea>
            </div>
            <button className="btn btn-neutral mt-4">Book Now</button>
            {/* <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={
                selected
                  ? `Selected: ${selected.toLocaleDateString()}`
                  : "Pick a day."
              }
            /> */}
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
