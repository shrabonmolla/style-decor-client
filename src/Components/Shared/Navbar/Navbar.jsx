import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";
import useAuthHook from "../../../Hooks/useAuthHook";

export default function Navbar() {
  const { user } = useAuthHook();
  const NavList = (
    <>
      <li className="hover:text-primary">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-primar ">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  w-11/12  mx-auto container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
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
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow"
          >
            {NavList}
          </ul>
        </div>
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal    px-1">{NavList}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <Link to="/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
        ) : (
          <Link to="/authlayout/login" className="btn btn-primary ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
