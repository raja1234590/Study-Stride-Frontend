import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); // check if user is logged in

  if (!token) {
    // if not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children; // if logged in, render the protected component
}

export default ProtectedRoute;
