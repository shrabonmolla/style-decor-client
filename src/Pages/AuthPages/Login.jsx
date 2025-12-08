import React from "react";
import { Link } from "react-router";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

export default function Login() {
  return (
    <div className="card  w-full max-w-sm shrink-0 space-y-2 ">
      <div className="card-body">
        <section className="space-y-2 mb-4">
          <h1 className="text-2xl font-bold">Good to See You Again</h1>
          <p>Log in and explore beautiful decor ideas.</p>
        </section>
        <fieldset className="fieldset">
          <label className="label ">Email</label>
          <input
            type="email"
            className="input rounded-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input rounded-full"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4 rounded-full">Login</button>

          <p>
            Don't have an account ?{" "}
            <Link to="/authlayout/register" className="text-primary">
              Register
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
