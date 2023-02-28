import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainCategories from "../components/Categories/MainCategories";

const CategoriesPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainCategories />
      </main>
    </>
  );
};

export default CategoriesPage;
