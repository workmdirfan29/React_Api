import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layout/Layout";
import TestDemo from "../components/test/TestDemo";

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <div>login</div>,
    },
    {
      path: "/register",
      element: <div>Register</div>,
    },
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <div>Home</div>,
        },
        {
          path: "about",
          element: <div>About</div>,
        },
        {
          path: "/user/:username",
          element: <TestDemo />,
        },
        {
          path: "/service",
          element: <div>Service Page</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
