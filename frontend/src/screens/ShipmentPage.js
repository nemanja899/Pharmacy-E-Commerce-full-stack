import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { saveShippingAdress } from "../Redux/Actions/CartActions";

const ShippingPage = () => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAdress } = cart;

  const [adress, setAdress] = useState(shippingAdress.adress);
  const [city, setCity] = useState(shippingAdress.city);
  const [postalCode, setPostalCode] = useState(shippingAdress.postalCode);
  const [country, setCountry] = useState(shippingAdress.country);
  const history = useNavigate();
  const dispach = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispach(saveShippingAdress({ adress, city, postalCode, country }));
    console.log(cart);
    history("/payment");
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
          <input
            type="text"
            placeholder="Enter Adress"
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
            required
          ></input>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          ></input>
          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
            required
          ></input>
          <input
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            required
          ></input>
          <button type="submit" className="btn btn-primary mt-1">   
              Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingPage;
