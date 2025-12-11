import React from "react";
import { Link } from "react-router";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import useAuthHook from "../../Hooks/useAuthHook";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function Register() {
  const { registerUser, userProflieUpdate } = useAuthHook();
  const { register, handleSubmit } = useForm();

  // handleRegister
  function handleRegister(formData) {
    console.log(formData);
    // 1. getting user from form form
    const userPhoto = formData.photo[0];
    //2.  store the photo in new formData()
    const formdata = new FormData();
    formdata.append("image", userPhoto);

    // 3.register user in firebase
    registerUser(formData.email, formData.password)
      .then(() => {
        // console.log("user createed successsfully", res);

        // storeing userimg in imgbb
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=21056502350557c7e773fb27b0740e40`,
            formdata
          )
          .then((res) => {
            console.log(res.data.data.url);
            const profileData = {
              displayName: formData.name,
              photoURL: res.data.data.url,
            };

            // 4.updating user profile
            userProflieUpdate(profileData)
              .then(() => toast.success("profile created successfully"))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="card  w-full max-w-sm shrink-0 space-y-2 ">
      <div className="card-body">
        <section className="space-y-2 mb-4">
          <h1 className="text-2xl font-bold ">Welcome to Your Decor Space</h1>
          <p>Register to get started.</p>
        </section>
        <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
          {/* Name */}
          <label className="label ">Name</label>
          <input
            {...register("name")}
            type="text"
            className="input rounded-full"
            placeholder="Name"
            name="name"
          />
          {/* email */}
          <label className="label ">Email</label>
          <input
            {...register("email")}
            type="email"
            className="input rounded-full"
            placeholder="Email"
            name="email"
          />

          {/* Photo url  */}

          <label className="label ">Photo Url</label>
          <input
            {...register("photo")}
            type="file"
            className="file-input rounded-full"
            name="photo"
          />

          {/* password` */}
          <label className="label">Password</label>
          <input
            {...register("password")}
            type="password"
            className="input rounded-full"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4 rounded-full">
            Register
          </button>
        </form>

        <p>
          Already have an account ?
          <Link to="/authlayout/login" className="text-primary">
            Login
          </Link>
        </p>
        {/* divider */}
        <div className="flex w-full flex-col">
          <div className="divider">OR</div>
        </div>

        <SocialLogin />
      </div>
    </div>
  );
}
