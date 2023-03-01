import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EditProductMain from "../components/products/EditProductMain";

const ProductEditPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain />
      </main>
    </>
  );
};

export default ProductEditPage;