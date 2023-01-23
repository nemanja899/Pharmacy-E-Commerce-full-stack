import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ShippingPage = () => {
  window.scrollTo(0, 0);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>Delivery Adress</h6>
          <input type="text" placeholder="Enter Adress"></input>
          <input type="text" placeholder="Enter City"></input>
          <input type="text" placeholder="Enter postal code"></input>
          <input type="text" placeholder="Enter Country"></input>
          <button type="submit">
            <Link to="/payment" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingPage;