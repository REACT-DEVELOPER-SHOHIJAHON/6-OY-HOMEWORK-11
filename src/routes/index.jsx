import React, { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import data from "../data/data";

const RouterController = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog/:id",
      element: <Blog data={data} />,
    },
  ];

  return useRoutes(routes);
};

export default RouterController;
