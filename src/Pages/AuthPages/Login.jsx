import React from "react";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import useAuthHook from "../../Hooks/useAuthHook";
import { useForm } from "react-hook-form";

export default function Login() {
  const { logIn } = useAuthHook();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // handleLogin
  function handleLogin(data) {
    logIn(data.email, data.password)
      .then(() => {
        toast.success("Login successful");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="card w-full max-w-sm shrink-0 mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <div className="card-body space-y-6">
        {/* Header */}
        <section className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-primary">Welcome Back!</h1>
          <p className="text-gray-600">
            Log in and explore beautiful decor ideas with StyleDecor.
          </p>
        </section>

        {/* Login Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div className="flex flex-col">
            <label className="label text-gray-700 font-semibold">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Your email"
              className="input input-bordered rounded-full focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="flex flex-col">
            <label className="label text-gray-700 font-semibold">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Your password"
              className="input input-bordered rounded-full focus:border-primary focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary hover:bg-primary-focus text-white font-bold rounded-full transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/authlayout/register"
            className="text-primary font-semibold hover:underline"
          >
            Register
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
