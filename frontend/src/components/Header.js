import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/UserActions";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = (e) => {
    dispatch(logout());
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(keyword.trim()){
      history(`/search/${keyword}`);
    }else {
      history('/');
    }
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__left">
          <div className="nav-tel d-flex">
            <FaPhone className="nav-contact" />
            <a href="tel:+381066456789">
              <p>(066) 456-789</p>
            </a>
          </div>
          <div className="nav-mail d-flex">
            <FaEnvelope className="nav-contact" />
            <a href="mailto:example@example.com">
              <p> zajic@example.com</p>
            </a>
          </div>
        </div>
        <div className="navbar__right">
          <IconContext.Provider value={{ className: "Soc-link" }}>
            <a href="https://www.facebook.com">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram />
            </a>
          </IconContext.Provider>
        </div>
      </nav>
      <div className="header">
        <div className="container">
          <div className="mobile-header">
            <div className="container">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        id="dropdownMenuButton2"
                        type="button"
                        className="name-button dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <Link className="dropdown-item" to="/profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={logoutHandler}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        id="dropdownMenuButton2"
                        type="button"
                        className="name-button dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <Link className="dropdown-item" to="/login">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/register">
                            Register
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group" onSubmit={submitHandler} >
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e)=>setKeyword(e.target.value)}
                      value={keyword}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img src="/images/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e)=>setKeyword(e.target.value)}
                    value={keyword}
                  ></input>
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      id="dropdownMenuButton"
                      type="button"
                      className="name-button dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {userInfo.name}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <Link to="/register">REGISTER</Link>
                    </div>
                    <div className="mx-2">
                      <Link to="/login">LOGIN</Link>
                    </div>
                  </>
                )}

                <Link to="/cart" className="cart-pc-icon d-flex">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
