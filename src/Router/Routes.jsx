import { createBrowserRouter } from "react-router";
import Mainlayoutes from "../Layoutes/Mainlayoutes";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

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
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
