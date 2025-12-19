import React from "react";
import useAuthHook from "../../Hooks/useAuthHook";
import { Link } from "react-router";

export default function MyProfile() {
  const { user } = useAuthHook();

  return (
    <div className="card  bg-base-100 card-lg shadow-sm w-94 mx-auto my-4">
      <div className="card-body">
        <div className="avatar avatar-online">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>

        <h2 className="card-title">{user?.displayName}</h2>
        <p>{user?.email}</p>
        <div className="justify-end card-actions">
          <Link to="/update_profile" className="btn btn-primary">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
