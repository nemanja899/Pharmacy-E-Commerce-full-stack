import React from "react";
import TopTotal from "./TopTotal";
//import LatestOrder from "./LatestOrder";
import SalesStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";

const Main = () => {
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Dashboard</h2>
        </div>
        <TopTotal></TopTotal>
        <div className="row">
          <SalesStatistics></SalesStatistics>
          <ProductsStatistics></ProductsStatistics>
        </div>
        <div className="card mb-4 shadow-sm">
        {/* // <LatestOrder></LatestOrder> */}
        </div>
      </section>
    </>
  );
};

export default Main;
