import React from "react";
import useAuthHook from "../../Hooks/useAuthHook";
import { Link } from "react-router";

export default function MyProfile() {
  const { user } = useAuthHook();

  return (
    <div className="max-w-md mx-auto my-8">
      <div className="card bg-base-100 shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center space-y-4">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} alt={user?.displayName} />
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-primary">{user?.displayName}</h2>
        <p className="text-gray-600">{user?.email}</p>

        {/* Edit Button */}
        <div className="card-actions mt-4">
          <Link
            to="/dashboard/update_profile"
            className="btn btn-primary rounded-full px-6 py-2 hover:scale-105 transition-transform"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
