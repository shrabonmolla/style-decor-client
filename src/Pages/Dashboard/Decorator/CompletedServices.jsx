import React from "react";
import useAuthHook from "../../../Hooks/useAuthHook";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function CompletedServices() {
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["services", user?.email, "completed"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bookings/decorators?decoratorEmail=${user?.email}&deliveryStatus=completed`
      );

      return res.data;
    },
  });

  console.log(data);
  const calculatePayout = (service) => {
    return service.serviceCost * 0.6;
  };

  return (
    <div>
      <h2 className="text-4xl">Completed Deliveries: {data?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Cost</th>
              <th>Payout</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((service, index) => (
                <tr key={service._id}>
                  <th>{index + 1}</th>
                  <td>{service.serviceCost}</td>
                  <td>{service.date}</td>
                  <td>{service.location}</td>
                  <td>{service.serviceCost}</td>
                  <td>{calculatePayout(service)}</td>
                  <td>
                    <button className="btn btn-primary text-white">
                      Cash out
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
