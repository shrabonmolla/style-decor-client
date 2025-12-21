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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import DecoratorRoute from "./DecoratorRoute";
import Loading from "../Components/Shared/Loading/Loading";
import Error from "../Components/Shared/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayoutes />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
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
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update_profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/view_details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  // auth layouts
  {
    path: "/authlayout",
    element: <AuthLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,

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
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,

    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
        element: (
          <DecoratorRoute>
            <MyAssignedServices />
          </DecoratorRoute>
        ),
      },
      {
        path: "my_completed_services",
        element: (
          <DecoratorRoute>
            <CompletedServices />
          </DecoratorRoute>
        ),
      },
      {
        path: "create_service",
        element: (
          <AdminRoute>
            <CreateService />
          </AdminRoute>
        ),
      },
      {
        path: "manage_service",
        element: (
          <AdminRoute>
            <ManageService />
          </AdminRoute>
        ),
      },
      {
        path: "manage_decorator",
        element: (
          <AdminRoute>
            <ManageDecorator />
          </AdminRoute>
        ),
      },
      {
        path: "manage_users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "assign_decorators",
        element: (
          <AdminRoute>
            <AssignDecorator />
          </AdminRoute>
        ),
      },
      {
        path: "update_service/:id",
        element: (
          <AdminRoute>
            <UpdateService />
          </AdminRoute>
        ),
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
