import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function UpdateService() {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["single-service", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services/${id}`);
      return res.data;
    },
  });
  // console.log(data);
  const {
    serviceName,
    serviceCategory,
    serviceCost,
    serviceDescription,
    unit,
    createdBy,
    _id,
  } = data || {};

  // handleUpdate
  function handleUpdate(updatedData) {
    axiosSecure
      .patch(`/services/${_id}`, updatedData)
      .then((res) => {
        console.log("updated successfully", res);
        toast.success("updated successfully");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Service</h1>
          <p className="py-6">Update a Service</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleUpdate)} className="fieldset">
              {/* service_name */}
              <label className="label">Service Name</label>
              <input
                {...register("serviceName")}
                defaultValue={serviceName}
                type="text"
                className="input"
                placeholder="service_name"
              />

              {/* service category */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">service category</legend>
                <select
                  {...register("serviceCategory")}
                  defaultValue={serviceCategory}
                  className="select"
                >
                  <option disabled={true}>Pick a category</option>
                  <option>Home</option>
                  <option>Wedding</option>
                  <option>Office</option>
                  <option>Seminar</option>
                  <option>Meeting</option>
                </select>
              </fieldset>

              {/* description */}
              <label className="label">Description</label>
              <textarea
                {...register("serviceDescription")}
                defaultValue={serviceDescription}
                className="textarea"
                placeholder="Description"
              ></textarea>

              {/* cost */}
              <label className="label">cost</label>
              <input
                {...register("serviceCost")}
                defaultValue={serviceCost}
                type="number"
                className="input"
                placeholder="cost"
              />

              {/* Unit */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Unit</legend>
                <select
                  {...register("unit")}
                  defaultValue={unit}
                  className="select"
                >
                  <option disabled={true}>Pick a Unit</option>
                  <option>Per Sqrt-fit</option>
                  <option>Per Floor</option>
                  <option>Per Meter</option>
                </select>
              </fieldset>

              {/* created by email */}
              <label className="label">creted by </label>
              <input
                {...register("createdBy")}
                defaultValue={createdBy}
                type="email"
                className="input"
                placeholder="email"
              />

              <button className="btn btn-neutral mt-4">Update Service</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
