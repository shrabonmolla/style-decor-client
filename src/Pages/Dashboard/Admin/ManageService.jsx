import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdEditNote, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Loading from "../../../Components/Shared/Loading/Loading";

export default function ManageService() {
  const axiosSecure = useAxiosSecure();

  // getting services data form backend
  const { data, refetch, isPending } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services`);
      return res.data;
    },
  });

  // handleDeleteService
  function handleDeleteService(id) {
    axiosSecure
      .delete(`/services/${id}`)
      .then((res) => {
        console.log("successfully deleted", res);
        toast.success("successfully deleted");
        refetch();
      })
      .catch((err) => console.log(err));
  }
  console.log(data);
  return (
    <div>
      <div className="text-5xl font-bold">All Services : </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isPending ? (
              <Loading />
            ) : (
              data.map((service, i) => {
                return (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceCost}</td>
                    <td className="flex gap-2">
                      <Link
                        to="/dashboard/update_service"
                        className="btn  btn-square btn-primary"
                      >
                        <MdEditNote />
                      </Link>
                      <button
                        onClick={() => handleDeleteService(service._id)}
                        className="btn btn-square btn-error"
                      >
                        <MdOutlineDelete />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
