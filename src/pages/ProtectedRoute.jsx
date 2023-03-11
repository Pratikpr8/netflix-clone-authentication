import React, { useContext } from "react";
import { netflixAuthContext } from "../App";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useContext(netflixAuthContext);
  if (!user) {
    return <Navigate to="/netflix-clone-authentication/" />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
