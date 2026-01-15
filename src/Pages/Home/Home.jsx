import React from "react";
import AllServices from "./All Services/AllServices";
import TopDecors from "./TopDecors/TopDecors";
import Hero from "../../Components/Home/Home/Hero";
import HeroCarousel from "../../Components/Home/HeroCarousel/HeroCarousel";
import FAQ from "../../Components/Home/FAQ/FAQ";
import Reviews from "../../Components/Home/Reviews/Reviews";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Features from "../../Components/Home/Features/Features";
import Statistics from "../../Components/Home/Statistics/Statistics";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroCarousel />
      <AllServices />
      <TopDecors />
      <FAQ />
      <Reviews />
      <About />
      <Statistics />
      <Features />
      <Contact />
    </div>
  );
}
