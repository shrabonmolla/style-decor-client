import React from "react";

import Logo from "../Components/Shared/Logo/Logo";
import { Link, Outlet } from "react-router";
import { IoIosCreate, IoIosHome } from "react-icons/io";
import { GrTask } from "react-icons/gr";
import {
  MdAssignment,
  MdBookmarks,
  MdManageAccounts,
  MdOutlinePayment,
} from "react-icons/md";
import {
  FaArrowUpWideShort,
  FaUsers,
  FaUsersViewfinder,
} from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import useRole from "../Hooks/useRole";

export default function DashboardLayout() {
  const { role } = useRole();
  console.log(role?.role);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">
            <Logo />
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* Home */}
            <li>
              <Link
                to="/dashboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Home"
              >
                {/* Settings icon */}
                <IoIosHome className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>

            {/*  Be a decorator  */}
            <li>
              <Link
                to="/dashboard/be_a_decorator"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip=" Be a decorator"
              >
                {/* Settings icon */}
                <FaArrowUpWideShort className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Be a decorator</span>
              </Link>
            </li>

            {role?.role == "decorator" && (
              <>
                {" "}
                {/*  My Assigned Services  */}
                <li>
                  <Link
                    to="/dashboard/my_assigned_services"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Assigned Services"
                  >
                    {/* Settings icon */}
                    <GrTask className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden">
                      My Assigned Services{" "}
                    </span>
                  </Link>
                </li>
                {/*  My Completed Services  */}
                <li>
                  <Link
                    to="/dashboard/my_completed_services"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip=" My Completed Services"
                  >
                    {/* Settings icon */}
                    <IoCheckmarkDoneCircle className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden">
                      My Completed Services{" "}
                    </span>
                  </Link>
                </li>
              </>
            )}

            {role?.role == "admin" && (
              <>
                {" "}
                {/*  Create item */}
                <li>
                  <Link
                    to="/dashboard/create_service"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Create Service"
                  >
                    {/* Settings icon */}
                    <IoIosCreate className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden">
                      Create Service
                    </span>
                  </Link>
                </li>
                {/*  manage service item */}
                <li>
                  <Link
                    to="/dashboard/manage_service"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Service"
                  >
                    {/* Settings icon */}
                    <MdManageAccounts className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden">
                      Manage Service
                    </span>
                  </Link>
                </li>
                {/* Manage Decorator  */}
                <li>
                  <Link
                    to="/dashboard/manage_decorator"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip=" Manage Decorator"
                  >
                    {/* Settings icon */}
                    <FaUsersViewfinder className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden">
                      Manage Decorator
                    </span>
                  </Link>
                </li>
                {/* Manage Users  */}
                <li>
                  <Link
                    to="/dashboard/manage_users"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip=" Manage Users"
                  >
                    {/* Settings icon */}
                    <FaUsers className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden">Manage Users</span>
                  </Link>
                </li>
                {/* Assign Decorators  */}
                <li>
                  <Link
                    to="/dashboard/assign_decorators"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip=" Assign Decorators "
                  >
                    {/* Settings icon */}
                    <MdAssignment className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden">
                      Assign Decorators{" "}
                    </span>
                  </Link>
                </li>
              </>
            )}

            {role?.role == "user" && (
              <>
                {" "}
                {/*  My bookings  */}
                <li>
                  <Link
                    to="/dashboard/my_bookings"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Bookings"
                  >
                    {/* Settings icon */}
                    <MdBookmarks className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden">My Bookings</span>
                  </Link>
                </li>
                {/*  My Payments  */}
                <li>
                  <Link
                    to="/dashboard/my_payments"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip=" My Payments"
                  >
                    {/* Settings icon */}
                    <MdOutlinePayment className="my-1.5 inline-block size-4" />
                    <span className="is-drawer-close:hidden"> My Payments</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
