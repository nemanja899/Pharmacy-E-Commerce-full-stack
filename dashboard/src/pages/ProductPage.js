import React from "react";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import MainProducts from "./../components/products/MainProducts";

const ProductPage = () => {
  return (
    <>
      <Sidebar active="products" />
      <main className="main-wrap">
        <Header />
        <MainProducts />
      </main>
    </>
  );
};

export default ProductPage;