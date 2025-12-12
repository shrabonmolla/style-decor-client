import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
export default function CreateService() {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  // handleCreateServices
  function handleCreateServices(formData) {
    axiosSecure
      .post(`/services`, formData)
      .then((res) => {
        console.log("Services added successfully", res.data);
        toast.success("Services added successfully");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create Service</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form
              onSubmit={handleSubmit(handleCreateServices)}
              className="fieldset"
            >
              {/* service_name */}
              <label className="label">service name</label>
              <input
                {...register("serviceName")}
                type="text"
                className="input"
                placeholder="service_name"
              />

              {/* service category */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">service category</legend>
                <select
                  {...register("serviceCategory")}
                  defaultValue="Pick a browser"
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
                className="textarea"
                placeholder="Description"
              ></textarea>

              {/* cost */}
              <label className="label">cost</label>
              <input
                {...register("serviceCost")}
                type="number"
                className="input"
                placeholder="cost"
              />

              {/* Unit */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Unit</legend>
                <select
                  {...register("unit")}
                  defaultValue="Pick a browser"
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
                type="email"
                className="input"
                placeholder="email"
              />

              <button className="btn btn-neutral mt-4">Create Service</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
