import React from "react";
import useAuthHook from "../../Hooks/useAuthHook";
import { Link } from "react-router";

export default function MyProfile() {
  const { user } = useAuthHook();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{user?.displayName}</h1>
          <p className="py-6">{user?.email}</p>
          <Link to="/update_profile" className="btn btn-primary">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
