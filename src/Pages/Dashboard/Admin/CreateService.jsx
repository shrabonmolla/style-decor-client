import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { ImageUpload } from "../../../Utils/ImageUPload";
import { useNavigate } from "react-router";
import useAuthHook from "../../../Hooks/useAuthHook";
import Title from "../../../Components/Shared/Title/Title";

export default function CreateService() {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { user } = useAuthHook();

  // handleCreateServices
  async function handleCreateServices(formData) {
    console.log(formData);
    const imageData = formData.photo[0];
    const res = await ImageUpload(imageData);
    // console.log(res.data.url);
    // const newFormData = {
    //   ...formData,
    //   photo: res.data.url,
    // };

    formData.photo = res.data.url;
    axiosSecure
      .post(`/services`, formData)
      .then((res) => {
        console.log("Services added successfully", res.data);
        toast.success("Services added successfully");
        navigate("/dashboard/manage_service");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Title
            text="Add a New Decoration Service"
            subText="Fill out the details below to create a service package. Make sure to provide accurate information so clients can easily book and enjoy your offerings."
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form
              onSubmit={handleSubmit(handleCreateServices)}
              className="fieldset"
            >
              {/* service Photo */}
              <label className="label"> Upload a Service Photo</label>
              <input
                {...register("photo", { required: true })}
                type="file"
                className="file-input"
              />
              {errors.photo && (
                <span className="text-red-400">This field is required</span>
              )}
              {/* service_name */}
              <label className="label">service name</label>
              <input
                {...register("serviceName", { required: true })}
                type="text"
                className="input"
                placeholder="service_name"
              />
              {errors.serviceName && (
                <span className="text-red-400">This field is required</span>
              )}

              {/* service category */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">service category</legend>
                <select
                  {...register("serviceCategory", { required: true })}
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
              {errors.serviceCategory && (
                <span className="text-red-400">This field is required</span>
              )}

              {/* description */}
              <label className="label">Description</label>
              <textarea
                {...register("serviceDescription", { required: true })}
                className="textarea"
                placeholder="Description"
              ></textarea>
              {errors.serviceDescription && (
                <span className="text-red-400">This field is required</span>
              )}

              {/* cost */}
              <label className="label">cost</label>
              <input
                {...register("serviceCost", { required: true })}
                type="number"
                className="input"
                placeholder="cost"
              />
              {errors.serviceCost && (
                <span className="text-red-400">This field is required</span>
              )}

              {/* Unit */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Unit</legend>
                <select
                  {...register("unit", { required: true })}
                  defaultValue="Pick a browser"
                  className="select"
                >
                  <option disabled={true}>Pick a Unit</option>
                  <option>Per Sqrt-fit</option>
                  <option>Per Floor</option>
                  <option>Per Meter</option>
                  <option>Per Hour</option>
                </select>
              </fieldset>
              {errors.unit && (
                <span className="text-red-400">This field is required</span>
              )}

              {/* created by email */}
              <label className="label">creted by </label>
              <input
                {...register("createdBy", { required: true })}
                type="email"
                className="input"
                placeholder="email"
                defaultValue={user?.email}
              />
              {errors.createdBy && (
                <span className="text-red-400">This field is required</span>
              )}

              <button className="btn btn-primary mt-4">Create Service</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
