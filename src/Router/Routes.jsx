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
import ViewDetails from "../Pages/Home/All Services/ViewDetails";
import MyBookings from "../Pages/Dashboard/User/MyBookings";
import PaymentSuccess from "../Pages/Dashboard/Payments/PaymentSuccess";
import PaymentCancell from "../Pages/Dashboard/Payments/PaymentCancell";
import MyPayments from "../Pages/Dashboard/User/MyPayments";
import BeADecorator from "../Pages/Dashboard/Decorator/BeADecorator";
import ManageDecorator from "../Pages/Dashboard/Admin/ManageDecorator";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AssignDecorator from "../Pages/Dashboard/Admin/AssignDecorator";
import MyAssignedServices from "../Pages/Dashboard/Decorator/MyAssignedServices";
import CompletedServices from "../Pages/Dashboard/Decorator/CompletedServices";
import HomeDashboard from "../Pages/Dashboard/Home/HomeDashboard";

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
      {
        path: "/view_details/:id",
        element: <ViewDetails />,
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
        path: "/dashboard",
        element: <HomeDashboard />,
      },
      {
        path: "be_a_decorator",
        element: <BeADecorator />,
        loader: () => fetch("/serviceCenters.json"),
      },
      {
        path: "my_assigned_services",
        element: <MyAssignedServices />,
      },
      {
        path: "my_completed_services",
        element: <CompletedServices />,
      },
      {
        path: "create_service",
        element: <CreateService />,
      },
      {
        path: "manage_service",
        element: <ManageService />,
      },
      {
        path: "manage_decorator",
        element: <ManageDecorator />,
      },
      {
        path: "manage_users",
        element: <ManageUsers />,
      },
      {
        path: "assign_decorators",
        element: <AssignDecorator />,
      },
      {
        path: "update_service/:id",
        element: <UpdateService />,
      },

      {
        path: "payment_success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment_cancell",
        element: <PaymentCancell />,
      },

      {
        path: "my_bookings",
        element: <MyBookings />,
      },
      {
        path: "my_payments",
        element: <MyPayments />,
      },
    ],
  },
]);
