import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import OrderMain from "../components/orders/OrderMain";

const OrderPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderMain  />
      </main>
    </>
  );
};

export default OrderPage;
