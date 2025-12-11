import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";
import useAuthHook from "../../../Hooks/useAuthHook";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logOut } = useAuthHook();

  function handleLogOut() {
    logOut()
      .then(() => {
        toast.success("logOut Successfull");
      })
      .catch((err) => console.log(err));
  }

  const NavList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavList}
          </ul>
        </div>
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavList}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <Link to="/dashboard" className="btn">
            Dashboard
          </Link>
        ) : (
          <Link to="/authlayout/login" className="btn">
            Login
          </Link>
        )}
        {/* IMAGE ROUNDED */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="user" src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/my_profile" className="justify-between">
                My Profile
              </Link>
            </li>
            <li>
              <button>{user?.displayName}</button>
            </li>
            <li>{user && <button onClick={handleLogOut}>Logout</button>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
