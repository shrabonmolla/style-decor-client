import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaBox, FaClipboardList } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function AdminStats() {
  const axiosSecure = useAxiosSecure();

  // Fetch total services
  const { data: services } = useQuery({
    queryKey: ["servicesCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/services");
      return res.data;
    },
  });

  // Fetch total bookings
  const { data: bookings } = useQuery({
    queryKey: ["bookingsCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });

  // Fetch total users
  const { data: users } = useQuery({
    queryKey: ["usersCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <section className="max-w-6xl mx-auto my-10 px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-xl font-bold text-center font-title text-primary mb-8">
        Activity Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        {/* Total Services */}
        <div className="card bg-primary  shadow-xl p-6 flex flex-col items-center">
          <FaBox className="text-5xl mb-3" />
          <h3 className="text-xl font-semibold">Total Services</h3>
          <p className="text-3xl font-bold">{services?.length || 0}</p>
        </div>

        {/* Total Bookings */}
        <div className="card bg-error  shadow-xl p-6 flex flex-col items-center">
          <FaClipboardList className="text-5xl mb-3" />
          <h3 className="text-xl font-semibold">Total Bookings</h3>
          <p className="text-3xl font-bold">{bookings?.length || 0}</p>
        </div>

        {/* Total Users */}
        <div className="card bg-accent  shadow-xl p-6 flex flex-col items-center">
          <FaUsers className="text-5xl mb-3" />
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{users?.length || 0}</p>
        </div>
      </div>
    </section>
  );
}
