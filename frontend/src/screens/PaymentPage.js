import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../Redux/Actions/CartActions";
import Header from "./../components/Header";

const PaymentPage = () => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAdress } = cart;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const history = useNavigate();
  const dispatch = useDispatch();

  if (!shippingAdress) {
    history("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history("/placeorder");
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>Select Payment Method</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">Paypal or Credit Card</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentPage;
