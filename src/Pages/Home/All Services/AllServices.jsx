import React from "react";
import ServiceCard from "./ServiceCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function AllServices() {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["serviceCard"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services`);
      return res.data;
    },
  });
  console.log(data);
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3  p-6 gap-4">
        {data && data.map((service) => <ServiceCard service={service} />)}
      </section>
    </div>
  );
}
