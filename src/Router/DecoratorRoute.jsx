import React from "react";
import useRole from "../Hooks/useRole";

export default function DecoratorRoute({ children }) {
  const role = useRole();

  if (role?.role !== "decorator") {
    return <div className="text-4xl">amar tomakei lagbe dekha</div>;
  }
  return children;
}
