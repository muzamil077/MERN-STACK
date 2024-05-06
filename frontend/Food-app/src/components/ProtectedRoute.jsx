// eslint-disable-next-line no-unused-vars
import React from "react";

import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
