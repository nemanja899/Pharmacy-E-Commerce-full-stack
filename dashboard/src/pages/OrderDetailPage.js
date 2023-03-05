import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import OrderDetailMain from "../components/orders/OrderDetailMain";
import { useParams } from "react-router";

const OrderDetailPage = () => {
  const {id}=useParams();

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailMain id={id} />
      </main>
    </>
  );
};

export default OrderDetailPage;
