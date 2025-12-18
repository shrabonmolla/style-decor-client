import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashCan, FaUserCheck } from "react-icons/fa6";
import { IoPersonRemoveSharp } from "react-icons/io5";

export default function ManageDecorator() {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: decorators = [] } = useQuery({
    queryKey: ["decorators", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/decorators?status=pending");
      return res.data;
    },
  });

  const updateRiderStatus = (Decorator, status) => {
    const updateInfo = { status: status, email: Decorator.email };
    axiosSecure
      .patch(`/decorators/${Decorator._id}`, updateInfo)
      .then((res) => {
        console.log("deorator status updatd", res);
        refetch();
      });
  };
  const handleApproval = (Decorator) => {
    updateRiderStatus(Decorator, "approved");
  };

  const handleRejection = (Decorator) => {
    updateRiderStatus(Decorator, "rejected");
  };
  return (
    <div>
      <h2 className="text-5xl">
        Decorators Pending Approval: {decorators.length}{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {decorators.map((Decorator, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{Decorator.name}</td>
                <td>{Decorator.email}</td>
                <td>{Decorator.district}</td>
                <td>
                  <p
                    className={`${
                      Decorator.status === "approved"
                        ? "text-green-800"
                        : "text-red-500"
                    }`}
                  >
                    {Decorator.status}
                  </p>
                </td>
                <td>
                  <button
                    onClick={() => handleApproval(Decorator)}
                    className="btn"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(Decorator)}
                    className="btn"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                  <button className="btn">
                    <FaTrashCan />
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
