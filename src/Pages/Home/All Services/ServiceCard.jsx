import React from "react";
import { Link } from "react-router";

export default function ServiceCard({ service }) {
  const { serviceName, serviceCategory, serviceCost, photo, _id } =
    service || {};
  return (
    <div className="card  shadow-sm m-2">
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{serviceCategory}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{serviceName}</h2>
          <span className="text-xl">{`${serviceCost}/=`}</span>
        </div>
        <figure className="">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl h-50 w-full object-cover"
          />
        </figure>
        <div className="mt-6">
          <Link
            to={`/view_details/${_id}`}
            className="btn btn-primary btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
