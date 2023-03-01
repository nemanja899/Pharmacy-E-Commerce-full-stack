import React from "react";
import { useSelector } from "react-redux";
import {  Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
