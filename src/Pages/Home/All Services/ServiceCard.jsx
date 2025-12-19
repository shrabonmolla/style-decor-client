import React from "react";
import { Link } from "react-router";

export default function ServiceCard({ service }) {
  const { serviceName, serviceCategory, serviceCost, photo, _id } =
    service || {};

  return (
    <Link
      to={`/view_details/${_id}`}
      className="card bg-base-100 shadow-sm w-full"
    >
      {/* Image */}
      <figure className="w-full">
        <img
          src={photo}
          alt={serviceName}
          loading="lazy"
          className="w-full h-48 sm:h-56 object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        {/* Title + Price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-lg font-bold break-words">{serviceName}</h2>

          <div className="badge bg-[#03045e] border-0 text-white whitespace-nowrap">
            BDT {serviceCost}
          </div>
        </div>

        {/* Category */}
        <div className="mt-2">
          <div className="badge badge-outline">{serviceCategory}</div>
        </div>
      </div>
    </Link>
  );
}
