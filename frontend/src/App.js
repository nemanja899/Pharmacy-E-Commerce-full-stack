import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import SigngleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartPage from "./screens/CartPage";
import ShippingPage from "./screens/ShipmentPage";
import ProfilePage from "./screens/ProfilePage";
import PaymentPage from "./screens/PaymentPage";
import PlaceOrderPage from "./screens/PlaceOrderPage";
import OrderPage from "./screens/OrderPage";
import NotFound from "./screens/NotFound";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:keyword" element={<HomePage />} />
          <Route path="/page/:pageNumber" element={<HomePage />} />
          <Route
            path="/search/:keyword/page/:pageNumber"
            element={<HomePage />}
          />
          <Route path="/products/:id" element={<SigngleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/cart/:id?" element={<CartPage />} />
          <Route
            path="/shipping"
            element={
              <PrivateRoute>
                <ShippingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute>
                <PaymentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/placeorder"
            element={
              <PrivateRoute>
                <PlaceOrderPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/order/:id"
            element={
              <PrivateRoute>
                <OrderPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
