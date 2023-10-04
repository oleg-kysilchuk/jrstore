import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Home = lazy(() => import("../pages/Home"));
const Matrix = lazy(() => import("../pages/Matrix"));
const Bms = lazy(() => import("../pages/Bms"));
const Coaching = lazy(() => import("../pages/Coaching"));
const Products = lazy(() => import("../pages/Products"));
const Workshop = lazy(() => import("../pages/Workshop"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Esoteric = lazy(() => import("../pages/Esoteric"));

// import Home from "../pages/Home";
// import Matrix from "../pages/Matrix";
// import Bms from "../pages/Bms";
// import Coaching from "../pages/Coaching";
// import Products from "../pages/Products";
// import Workshop from "../pages/Workshop";
// import NotFound from "../pages/NotFound";
// import Esoteric from "../pages/Esoteric";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
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
      {
        path: "/workshop",
        element: <Workshop />,
      },
    ],
  },
  {
    path: "/esoteric",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Esoteric />
      </Suspense>
    ),
  },
]);

export default router;
