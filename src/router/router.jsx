import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Matrix from "../pages/Matrix";
import Bms from "../pages/Bms";
import Coaching from "../pages/Coaching";
import Products from "../pages/Products";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/matrix",
        element: <Matrix />,
      },
      {
        path: "/bmscommunity",
        element: <Bms />,
      },
      {
        path: "/coaching",
        element: <Coaching />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
