import React from "react";
import Map from "./Map";
import { useLoaderData } from "react-router";
import AllServices from "../Home/All Services/AllServices";

export default function Services() {
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);
  return (
    <div>
      <AllServices />
      <Map serviceCenters={serviceCenters} />
    </div>
  );
}
