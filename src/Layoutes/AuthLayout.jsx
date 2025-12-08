import React from "react";
import { Outlet } from "react-router";
import Logo from "../Components/Shared/Logo/Logo";
import Lottie from "lottie-react";
import loginanimation from "../../public/login.json";

export default function AuthLayout() {
  return (
    <div className=" p-6 grid grid-cols-1 lg:grid-cols-2  mx-auto bg-gradient-to-t from-blue-300 to-transparent ">
      {/* login & register section */}
      <section className="grid content-around ">
        <Logo />
        <Outlet />
      </section>

      {/* animation related section */}
      <section>
        <Lottie animationData={loginanimation} loop={true} />
      </section>
    </div>
  );
}
