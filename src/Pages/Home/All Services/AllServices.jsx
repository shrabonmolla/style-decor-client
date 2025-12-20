import React from "react";
import ServiceCard from "./ServiceCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Components/Shared/Loading/Loading";
import Title from "../../../Components/Shared/Title/Title";

export default function AllServices() {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["serviceCard"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services`);
      return res.data;
    },
  });
  // console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Title
        text="Our Decoration Services"
        subText="Beautiful, affordable decoration solutions for every local event"
      />
      <section className="grid grid-cols-2 md:grid-cols-4  w-11/12 mx-auto my-6 gap-4">
        {data && data.map((service) => <ServiceCard service={service} />)}
      </section>
    </div>
  );
}
