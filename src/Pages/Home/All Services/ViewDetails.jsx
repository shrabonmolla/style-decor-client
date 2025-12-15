import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export default function ViewDetails() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

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
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
