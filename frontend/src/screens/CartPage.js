import React, { useEffect } from "react";
import Header from "./../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Actions/CartActions";
import { nanoid } from "nanoid";

const CartPage = () => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const history = useNavigate();
  const productId = location.pathname.split("/")[2];

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);


  const checkOutHandler=(e)=>{
    history("/login?redirect=shipping");
  }
  const removeFromCartHandler=(id)=>{
    dispatch(removeFromCart(id));
  }
  return (
    <>
      <Header />

      <div className="container">
        {cartItems.length === 0 ? (
          <div className="alert alert-info text-center mt-3">
            Your cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{ fontSize: "12px" }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className="alert alert-info text-center mt-3">
              Total Cart Products
              <Link to="/cart" className="text-success mt-2">
                {`(${cartItems.length})`}
              </Link>
            </div>
            {cartItems.map((item) => (
              <div className="cart-item row" key={item.product}>
                <div
                onClick={()=>removeFromCartHandler(item.product)}
                  key={nanoid()}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div key={nanoid()} className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <div
                  key={nanoid()}
                  className="cart-text col-md-5 d-flex align-items-center"
                >
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div
                  key={nanoid()}
                  className="cart-qty col-md-2 col-sm-2 mt-md-5 mt-3 mt-md-0 d-flex align-items-column"
                >
                  <h6>QUANTITY</h6>
                  <select
                    name="qty"
                    value={item.qty}
                    onChange={(e) => {
                      if (e.target.name === "qty") {
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        );
                      }
                    }}
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 d-flex align-items-sm-end">
                  <h6>SUBTOTAL</h6>
                  <h4>{item.price} RSD</h4>
                </div>
              </div>
            ))}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">{total} RSD</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6">
                <button>Continue To Shopping</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>
                   
                      Checkout
                    
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
