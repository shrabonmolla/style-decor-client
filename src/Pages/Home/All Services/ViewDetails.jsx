import React, { useRef } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuthHook from "../../../Hooks/useAuthHook";
import Loading from "../../../Components/Shared/Loading/Loading";

export default function ViewDetails() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const bookRef = useRef();
  const { user } = useAuthHook();

  // Fetch service details
  const { data, isLoading } = useQuery({
    queryKey: ["services_details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const {
    serviceName,
    serviceCategory,
    serviceCost,
    photo,
    serviceDescription,
    unit,
  } = data || {};

  // Open modal
  const handleOpenModal = () => {
    bookRef.current.showModal();
  };

  // Book service
  const handleBookService = (bookingData) => {
    axiosSecure
      .post("/bookings", bookingData)
      .then(() => {
        toast.success("Service booked successfully!");
        bookRef.current.close();
      })
      .catch(() => {
        toast.error("Failed to book service");
      });
  };

  return (
    <>
      {/* ===== SERVICE DETAILS ===== */}
      <div className="min-h-screen w-full px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div>
              <img
                src={photo}
                alt={serviceName}
                loading="lazy"
                className="w-full max-h-[420px] object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#023e8a] uppercase">
                {serviceCategory}
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#03045e] mt-2">
                {serviceName}
              </h1>

              {/* ✅ FIXED DESCRIPTION */}
              <div className="mt-4 max-h-48 md:max-h-60 overflow-y-auto rounded-xl border border-base-300 p-4">
                <p className="text-gray-600 leading-relaxed break-words">
                  {serviceDescription}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-lg font-semibold text-[#03045e]">
                  💰 Price:
                  <span className="text-gray-700 ml-2">{serviceCost}</span>
                </p>
                <p className="text-lg font-semibold text-[#03045e]">
                  📦 Unit:
                  <span className="text-gray-700 ml-2">{unit}</span>
                </p>
              </div>

              <button
                onClick={handleOpenModal}
                className="mt-8 bg-[#03045e] hover:bg-[#023e8a] text-white px-8 py-3 rounded-xl font-semibold transition"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOOKING MODAL ===== */}
      <dialog ref={bookRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-2xl">
          <h3 className="text-2xl font-bold text-[#03045e] mb-4">
            Book Service
          </h3>

          <form
            onSubmit={handleSubmit(handleBookService)}
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
                defaultValue={serviceName}
                className="input input-bordered w-full"
                readOnly
              />

              <input
                {...register("serviceCost")}
                defaultValue={serviceCost}
                className="input input-bordered w-full"
                readOnly
              />
            </div>

            <input
              {...register("date")}
              type="date"
              className="input input-bordered w-full"
              required
            />

            <textarea
              {...register("location")}
              className="textarea textarea-bordered w-full"
              placeholder="Service Location"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#03045e] hover:bg-[#023e8a] text-white py-3 rounded-xl font-semibold"
            >
              Confirm Booking
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
