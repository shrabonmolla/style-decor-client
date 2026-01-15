import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceCardSkeleton from "../../../Components/Shared/ServiceCardSkeleton/ServiceCardSkeleton";
import Title from "../../../Components/Shared/Title/Title";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";

export default function AllServices() {
  const axiosInstance = useAxios();
  const [searchText, setSearchText] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["serviceCard", searchText],
    queryFn: async () => {
      const res = await axiosInstance.get(`/services?searchText=${searchText}`);
      return res.data;
    },
    keepPreviousData: true, // prevents empty flicker when typing
  });

  return (
    <div className="w-11/12 mx-auto">
      <Title
        text="Our Decoration Services"
        subText="Beautiful, affordable decoration solutions for every local event"
      />

      {/* ====== Search Bar ====== */}
      <div className="form-control my-6 w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search for services..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      {/* ====== Services Grid ====== */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {isLoading
          ? [...Array(8)].map((_, i) => <ServiceCardSkeleton key={i} />)
          : data.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
      </section>
    </div>
  );
}
