import React from 'react';
import Header from "./../components/Header";
import {Link} from "react-router-dom";


const CartPage = ()=>{
    window.scrollTo(0,0);
    return (
        <>
            <Header />

            <div className="container">
                <div className="alert alert-info text-center mt-3">
                    Total Cart Products
                    <Link to="/cart" className='text-success mt-2'>
                        (4)
                    </Link>
                </div>
                <div className="cart-iterm row">
                    <div className="remove-button d-flex justify-content-center align-items-center">
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="cart-image col-md-3">
                        <image src="" alt="" />
                    </div>
                    <div className="cart-text col-md-5 d-flex align-items-center">
                        <Link to="#">
                            <h4>Nike</h4>
                        </Link>
                    </div>
                    <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column">
                        <h6>Quantity</h6>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-end">
                        <h6>Subtotal</h6>
                        <h4>$456</h4>
                    </div>
                </div>

                <div className="total">
                    <span className="sub">total:</span>
                    <span className='total-price'>$567</span>
                </div>
                <hr />
                <div className="cart-buttons d-flex align-items-center row">
                    <Link to="/" className='col-md-6'>
                        <button>Continue To Shopping</button>
                    </Link>
                    <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                        <button>
                            <Link to="/shipping" className='text-white'>
                                Checkout
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;