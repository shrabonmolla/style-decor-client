import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm, useWatch } from "react-hook-form";
import { ImageUpload } from "../../../Utils/ImageUPload";
import useAuthHook from "../../../Hooks/useAuthHook";

import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";

export default function BeADecorator() {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors }
  } = useForm();
  const { user } = useAuthHook();
  const navigate = useNavigate();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);

  const regions = [...new Set(regionsDuplicate)];
  // explore useMemo useCallback
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const decoratorRegion = useWatch({ control, name: "region" });

  // handleAddDecorators
  async function handleAddDecorators(formData) {
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
      .post(`/decorators`, formData)
      .then((res) => {
        console.log("decorators added successfully", res.data);
        toast.success("decorators added successfully");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Be A Decorator</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form
              onSubmit={handleSubmit(handleAddDecorators)}
              className="fieldset"
            >
              {/* service Photo */}
              <label className="label"> Upload a Photo</label>
              <input
                {...register("photo")}
                type="file"
                className="file-input"
              />
              {/* service_name */}
              <label className="label">your name</label>
              <input
                {...register("name")}
                type="text"
                className="input"
                placeholder="name"
              />

              {/* created by email */}
              <label className="label">Emali </label>
              <input
                {...register("email")}
                type="email"
                className="input"
                placeholder="email"
                defaultValue={user?.email}
              />

              {/* decorator region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Regions</legend>
                <select
                  {...register("region")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* decorator districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Districts</legend>
                <select
                  {...register("district")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(decoratorRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <button className="btn btn-neutral mt-4">Be A Decorator</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
