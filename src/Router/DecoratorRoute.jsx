import React from "react";
import useRole from "../Hooks/useRole";
import useAuthHook from "../Hooks/useAuthHook";
import Loading from "../Components/Shared/Loading/Loading";

export default function DecoratorRoute({ children }) {
  const { role, isLoading } = useRole();

  const { authloading } = useAuthHook();

  if (authloading || isLoading) {
    return <Loading></Loading>;
  }

  if (role?.role !== "decorator") {
    return <div className="text-4xl">Age decoretor hwo</div>;
  }
  return children;
}
