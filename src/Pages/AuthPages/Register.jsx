import React from "react";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import useAuthHook from "../../Hooks/useAuthHook";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

export default function Register() {
  const { registerUser, userProflieUpdate } = useAuthHook();
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // handleRegister
  function handleRegister(formData) {
    const userPhoto = formData.photo[0];
    const formdata = new FormData();
    formdata.append("image", userPhoto);

    registerUser(formData.email, formData.password)
      .then(() => {
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=21056502350557c7e773fb27b0740e40`,
            formdata
          )
          .then((res) => {
            const userInfo = {
              email: formData.email,
              displayName: formData.name,
              photoURL: res.data.data.url,
            };
            axiosSecure.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                toast.success("User data saved in database");
              }
            });

            const profileData = {
              displayName: formData.name,
              photoURL: res.data.data.url,
            };

            userProflieUpdate(profileData)
              .then(() => {
                toast.success("Profile created successfully");
                navigate("/authlayout/login");
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="card w-full max-w-sm shrink-0 mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <div className="card-body space-y-6">
        {/* Header */}
        <section className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-primary">
            Welcome to Your Decor Space
          </h1>
          <p className="text-gray-600">Register to get started.</p>
        </section>

        {/* Registration Form */}
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="label text-gray-700 font-semibold">Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="input input-bordered rounded-full focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="label text-gray-700 font-semibold">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="input input-bordered rounded-full focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Photo */}
          <div className="flex flex-col">
            <label className="label text-gray-700 font-semibold">
              Profile Photo
            </label>
            <input
              {...register("photo")}
              type="file"
              className="file-input file-input-bordered rounded-full focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="label text-gray-700 font-semibold">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Your Password"
              className="input input-bordered rounded-full focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-primary hover:bg-primary-focus text-white font-bold rounded-full transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/authlayout/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Social Login */}
        <SocialLogin />
      </div>
    </div>
  );
}
