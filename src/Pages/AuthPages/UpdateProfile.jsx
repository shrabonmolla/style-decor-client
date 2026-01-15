import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthHook from "../../Hooks/useAuthHook";
import { ImageUpload } from "../../Utils/ImageUPload";
import toast from "react-hot-toast";
import Title from "../../Components/Shared/Title/Title";

export default function UpdateProfile() {
  const { register, handleSubmit } = useForm();
  const { user, userProflieUpdate } = useAuthHook();
  //   handleUpdateProfile
  function handleUpdateProfile(userData) {
    // console.log("updated data", userData);
    const userImg = userData.photo[0];
    ImageUpload(userImg).then((res) => {
      const profileData = {
        displayName: userData.name,
        photoURL: res.data.url,
        email: userData.photo,
      };
      userProflieUpdate(profileData).then(() =>
        toast.success("profile updated successfully")
      );
    });
  }

  return (
    <div className="card  w-full max-w-sm shrink-0 space-y-2 mx-auto ">
      <div className="card-body">
        <section className="space-y-2 mb-4">
          <Title text="Update You Profile" />
        </section>
        <form onSubmit={handleSubmit(handleUpdateProfile)} className="fieldset">
          {/* Name */}
          <label className="label ">Name</label>
          <input
            {...register("name")}
            type="text"
            className="input rounded-full"
            placeholder="Name"
            name="name"
            defaultValue={user?.displayName}
          />
          {/* email */}
          <label className="label ">Email</label>
          <input
            {...register("email")}
            type="email"
            className="input rounded-full"
            placeholder="Email"
            name="email"
            defaultValue={user?.email}
          />

          {/* Photo url  */}

          <label className="label ">Photo Url</label>
          <input
            {...register("photo")}
            type="file"
            className="file-input rounded-full"
            name="photo"
          />

          <button className="btn btn-primary mt-4 rounded-full">Update</button>
        </form>
      </div>
    </div>
  );
}
