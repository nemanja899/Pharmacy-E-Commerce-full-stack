import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
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
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
