import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuthHook from "../../../Hooks/useAuthHook";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import Loading from "../../../Components/Shared/Loading/Loading";
import Title from "../../../Components/Shared/Title/Title";

export default function MyPayments() {
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <Title text={`Payments History : ${data?.length}`} />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Cost</th>
            <th>Paid At</th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <th>{data.serviceName}</th>
                  <td>{data.amount}</td>
                  <td>{data.paidAt}</td>
                  <td>{data.transactionId}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
