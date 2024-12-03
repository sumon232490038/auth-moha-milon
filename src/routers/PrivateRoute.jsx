import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-bars loading-lg text-center"></span>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
