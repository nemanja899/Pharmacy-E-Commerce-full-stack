import React from "react";
import Header from "../components/Header";
import Main from "../components/Home/Main";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Main></Main>
      </main>
    </>
  );
};

export default HomePage;
