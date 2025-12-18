import React from "react";
import useAuthHook from "../../../Hooks/useAuthHook";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

export default function MyAssignedServices() {
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();

  const { data, refetch } = useQuery({
    queryKey: ["services", user?.email, "decorator_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bookings/decorators?decoratorEmail=${user?.email}&deliveryStatus=decorator_assigned`
      );

      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status,
      decoratorId: parcel.riderId,
    };

    let message = `Services Status is updated with ${status
      .split("_")
      .join(" ")}`;

    axiosSecure
      .patch(`/bookings/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  console.log(data);
  return (
    <div>
      <h2 className="text-4xl">Parcels Pending Pickup: {data?.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.serviceName}</td>
                  <td>
                    {booking.deliveryStatus === "decorator_assigned" ? (
                      <>
                        <button
                          onClick={() =>
                            handleDeliveryStatusUpdate(
                              booking,
                              "planning_phase"
                            )
                          }
                          className="btn btn-primary text-white"
                        >
                          Accept
                        </button>
                        <button className="btn btn-warning text-white ms-2">
                          Reject
                        </button>
                      </>
                    ) : (
                      <span>Accepted</span>
                    )}
                  </td>
                  <td className=" flex flex-col  gap-4 ">
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(
                          booking,
                          "materials_prepared"
                        )
                      }
                      className="btn btn-primary text-white"
                    >
                      Materials Prepared
                    </button>
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(booking, "on_the_way_vanue")
                      }
                      className="btn btn-primary text-white mx-2"
                    >
                      On the way to venue
                    </button>
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(booking, "setup_in_porgress")
                      }
                      className="btn btn-primary text-white mx-2"
                    >
                      setUp in Progress
                    </button>
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(booking, "completed")
                      }
                      className="btn btn-primary text-white  mx-2"
                    >
                      completed
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
