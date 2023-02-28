import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import OrderDetailMain from "../components/orders/OrderDetailMain";

const OrderDetailPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailMain />
      </main>
    </>
  );
};

export default OrderDetailPage;
