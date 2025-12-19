import React from "react";
import useRole from "../../../Hooks/useRole";
import useAuthHook from "../../../Hooks/useAuthHook";

export default function HomeDashboard() {
  const { role } = useRole();
  const { user } = useAuthHook();
  return (
    <div className="card w-96 bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{`Welcome,${user?.displayName}!`}</h2>
        <p>{`You are logged in as ${role?.role || "user"}.`}</p>
      </div>
    </div>
  );
}
