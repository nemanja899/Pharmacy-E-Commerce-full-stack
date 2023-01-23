import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const PlaceOrderPage = () => {
  window.scrollTo(0, 0);

  const placeOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i class="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin Doe</p>
                <p>admin@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 centar">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: Serbia</p>
                <p>Pay method: Paypal</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 centar">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>Adress: Timocke bla bla</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src="/images/8.png" alt="products" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to={"/"}>
                  <h6>Nike</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                <h4>Quanity</h4>
                <h6>4</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-column">
                <h4>Subtotal</h4>
                <h6>RSD 123</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>RSD 234</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>RSD 200</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>RSD 10</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>RSD 1000</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" onClick={placeOrderHandler}>
              <Link to="/order" className="text-white">
                Place Order
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderPage;