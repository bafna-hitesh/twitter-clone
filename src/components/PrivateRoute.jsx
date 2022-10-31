import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useData } from "./context";

export const PrivateRoute = ({ path, ...props }) => {
  const { isLogin } = useData();

  const location = useLocation();

  return isLogin ? (
    <Outlet {...props} path={path} />
  ) : (
    <Navigate state={{ from: location.pathname }} replace to="/" />
  );
};
