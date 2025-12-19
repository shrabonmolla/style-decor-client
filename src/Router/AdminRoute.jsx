import React from "react";
import useRole from "../Hooks/useRole";
import useAuthHook from "../Hooks/useAuthHook";
import Loading from "../Components/Shared/Loading/Loading";

export default function AdminRoute({ children }) {
  const { role, isLoading } = useRole();
  // console.log(role?.role, isLoading);

  const { authloading } = useAuthHook();

  if (authloading || isLoading) {
    return <Loading></Loading>;
  }

  if (role?.role !== "admin") {
    return <div className="text-4xl">Age Admin how </div>;
  }
  return children;
}
