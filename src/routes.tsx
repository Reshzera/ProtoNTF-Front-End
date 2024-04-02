import React from "react";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Unauthorized from "./Layouts/Unauthorized";
import Home from "./Pages/Unauthorized/Home";
import Mint from "./Pages/Unauthorized/Mint";

// import { Container } from './styles';

const unauthorizedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Unauthorized />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mint", element: <Mint /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];
const routes = createBrowserRouter(unauthorizedRoutes);

const Routes: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
