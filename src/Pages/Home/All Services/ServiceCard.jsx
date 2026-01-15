import React from "react";
import { Link } from "react-router";

export default function ServiceCard({ service }) {
  const {
    serviceName,
    serviceCategory,
    serviceDescription,
    serviceCost,
    unit,
    photo,
    _id,
  } = service || {};

  return (
    <div className="card bg-base-100 border border-[#f1e4e2] rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-[0_8px_25px_rgba(178,110,99,0.25)] transition duration-300">
      {/* Image */}
      <figure className="w-full h-52 overflow-hidden">
        <img
          src={photo}
          alt={serviceName}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-5 flex flex-col flex-grow">
        {/* Category Badge */}
        <span className="badge border-none bg-[#f5ebe9] text-[#b26e63] font-medium w-fit">
          {serviceCategory}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-[#2b1d1b] mt-2 line-clamp-1">
          {serviceName}
        </h2>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {serviceDescription}
        </p>

        {/* Meta Info */}
        <div className="mt-4 flex items-center justify-between text-sm ">
          <span className="font-bold">
            <span>&#2547;</span> {serviceCost}
          </span>
          <span>{unit}</span>
        </div>

        {/* Button */}
        <div className="mt-auto pt-4">
          <Link
            to={`/view_details/${_id}`}
            className="btn w-full rounded-full bg-[#b26e63] text-white hover:bg-[#9c5f55] border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
