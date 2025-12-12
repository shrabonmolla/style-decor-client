import { createBrowserRouter } from "react-router";
import Mainlayoutes from "../Layoutes/Mainlayoutes";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AuthLayout from "../Layoutes/AuthLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import MyProfile from "../Pages/AuthPages/MyProfile";
import UpdateProfile from "../Pages/AuthPages/UpdateProfile";
import DashboardLayout from "../Layoutes/DashboardLayout";
import CreateService from "../Pages/Dashboard/Admin/CreateService";
import ManageService from "../Pages/Dashboard/Admin/ManageService";
import UpdateService from "../Pages/Dashboard/Admin/UpdateService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("./serviceCenters.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/my_profile",
        element: <MyProfile />,
      },
      {
        path: "/update_profile",
        element: <UpdateProfile />,
      },
    ],
  },

  // auth layouts
  {
    path: "/authlayout",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // dashboard layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "create_service",
        element: <CreateService />,
      },
      {
        path: "manage_service",
        element: <ManageService />,
      },
      {
        path: "update_service",
        element: <UpdateService />,
      },
    ],
  },
]);
