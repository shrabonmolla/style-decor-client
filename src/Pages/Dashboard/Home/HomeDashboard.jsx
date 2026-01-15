import React from "react";
import useRole from "../../../Hooks/useRole";
import useAuthHook from "../../../Hooks/useAuthHook";
import AdminStats from "../Admin/AdminStats";
import BookingStatusChart from "../Admin/BookingStatusChart";

export default function HomeDashboard() {
  const { role } = useRole();
  const { user } = useAuthHook();
  return (
    <div>
      <div className="card w-96 bg-base-100 card-lg shadow-sm mx-auto">
        <div className="card-body">
          <h2 className="card-title font-title text-primary">{`Welcome,${user?.displayName}!`}</h2>
          <p>{`You are logged in as ${role?.role || "user"}.`}</p>
        </div>
      </div>
      {role?.role == "admin" && <AdminStats />}
      {role?.role == "admin" && <BookingStatusChart />}
    </div>
  );
}
