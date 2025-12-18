import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function AssignDecorator() {
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef();
  const [selectedParcel, setSelectedParcel] = useState(null);

  const { data: parcels = [], refetch: parcelsRefetch } = useQuery({
    queryKey: ["bookings", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/bookings?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });

  // console.log(parcels);

  const { data: riders = [] } = useQuery({
    queryKey: ["decorators", "available"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/decorators?status=approved&workStatus=available`
      );
      return res.data;
    },
  });

  console.log(riders);

  const openAssignRiderModal = (parcel) => {
    setSelectedParcel(parcel);
    riderModalRef.current.showModal();
  };

  const handleAssignRider = (decorator) => {
    const riderAssignInfo = {
      decoratorId: decorator._id,
      decoratorEmail: decorator.email,
      decoratorName: decorator.name,
      parcelId: selectedParcel._id,
    };
    axiosSecure
      .patch(`/bookings/${selectedParcel._id}`, riderAssignInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          riderModalRef.current.close();
          parcelsRefetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider has been assigned.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl">Assign Decorators: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Date</th>
              <th>Pickup District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.serviceName}</td>
                <td>{parcel.serviceCost}</td>
                <td>{parcel.date}</td>
                <td>{parcel.location}</td>
                <td>
                  <button
                    onClick={() => openAssignRiderModal(parcel)}
                    className="btn btn-primary text-black"
                  >
                    Find Riders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <dialog
          ref={riderModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Riders: {riders.length}!</h3>

            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {riders.map((decorator, i) => (
                    <tr key={decorator._id}>
                      <th>{i + 1}</th>
                      <td>{decorator.name}</td>
                      <td>{decorator.email}</td>
                      <td>
                        <button
                          onClick={() => handleAssignRider(decorator)}
                          className="btn btn-primary text-black"
                        >
                          Assign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
