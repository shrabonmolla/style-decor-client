import React from "react";
import { Outlet } from "react-router";
import Logo from "../Components/Shared/Logo/Logo";
import Lottie from "lottie-react";
import loginanimation from "../../public/login.json";

export default function AuthLayout() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 mx-auto min-h-screen bg-gradient-to-t from-primary/20 to-transparent">
      {/* login & register section */}
      <section className="grid content-center lg:content-around">
        <Logo />
        <Outlet />
      </section>

      {/* animation related section */}
      <section className="flex items-center justify-center">
        <Lottie
          animationData={loginanimation}
          loop={true}
          style={{ width: "100%", maxWidth: 500 }}
          // Optional: use primary color override if your Lottie supports it
        />
      </section>
    </div>
  );
}
