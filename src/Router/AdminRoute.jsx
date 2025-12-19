import React from "react";
import useRole from "../Hooks/useRole";

export default function AdminRoute({ children }) {
  const role = useRole();

  if (role.role !== "admin") {
    return <div className="text-4xl">ki lukiye lukiye dekha</div>;
  }
  return children;
}
