import React from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";

export default function Mainlayoutes() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
