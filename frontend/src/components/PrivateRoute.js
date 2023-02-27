import React from 'react';
import { Route, Navigate } from 'react-router-dom';



function PrivateRoute({children}) {
 const token= window.localStorage.getItem("userInfo");
 return token? children : <Navigate to="/login" />;
};


export default PrivateRoute;