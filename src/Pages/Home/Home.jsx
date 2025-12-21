import React from "react";
import AllServices from "./All Services/AllServices";
import TopDecors from "./TopDecors/TopDecors";
import Hero from "../../Components/Home/Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <AllServices />
      <TopDecors />
    </div>
  );
}
