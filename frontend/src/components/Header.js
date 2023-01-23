import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="Announcement">
        <div className="containder">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+381 066 555-555</p>
              <p>inifo@apotekazajic.com</p>
            </div>
            <div className="col-12 col-lg-6 justify-content-center justify-content-lg-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">4</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
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
                <Link alt="navbar-brand" to="/">
                  <img src="/images/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Search"></input>
                    <button type="submit" className="search-button">
                      search
                    </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login">
                <div className="btn-group">
                  <button type="button" className="name-button dropdown-toggle"
                   data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"
                   >
                    Hi,Admin Doe
                   </button>
                   <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                   </div>
                </div>
                <Link to="/cart">
                  <i className="fas fa-shoping-bag"></i>
                  <span className="badge">4</span>
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