import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuthHook from "../Hooks/useAuthHook";
import Loading from "../Components/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, authloading } = useAuthHook();
  const location = useLocation();

  if (authloading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return (
      <Navigate state={location.pathname} to="/authlayout/login"></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
