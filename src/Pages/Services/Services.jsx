import React from "react";
import Map from "./Map";
import { useLoaderData } from "react-router";

export default function Services() {
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);
  return (
    <div>
      <Map serviceCenters={serviceCenters} />
    </div>
  );
}
