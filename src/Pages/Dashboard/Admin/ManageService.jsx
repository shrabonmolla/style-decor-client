import React from "react";
import { MdEditNote, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";

export default function ManageService() {
  return (
    <div>
      <div  className="text-5xl font-bold">All Services : </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className="flex gap-2">
                <Link
                  to="/dashboard/update_service"
                  className="btn  btn-square btn-primary"
                >
                  <MdEditNote />
                </Link>
                <button className="btn btn-square btn-error">
                  <MdOutlineDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
