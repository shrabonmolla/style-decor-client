import React from "react";
import { Link } from "react-router";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

export default function Register() {
  return (
    <div className="card  w-full max-w-sm shrink-0 space-y-2 ">
      <div className="card-body">
        <section className="space-y-2 mb-4">
          <h1 className="text-2xl font-bold ">Welcome to Your Decor Space</h1>
          <p>Register to get started.</p>
        </section>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label ">Name</label>
          <input
            type="text"
            className="input rounded-full"
            placeholder="Name"
          />
          {/* email */}
          <label className="label ">Email</label>
          <input
            type="email"
            className="input rounded-full"
            placeholder="Email"
          />

          {/* Photo url  */}
          <label className="label ">Photo Url</label>
          <input
            type="text"
            className="input rounded-full"
            placeholder="Photo url"
          />
          {/* password` */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input rounded-full"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4 rounded-full">Login</button>

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
        </fieldset>

        <SocialLogin />
      </div>
    </div>
  );
}
