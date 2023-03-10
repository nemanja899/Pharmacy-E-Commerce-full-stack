import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/UserActions";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    $("[data-triger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-triger");
      $(offcanvas_id).toggleClass("show");
    });
    $(".btn-aside-minimize").on("click", function (e) {
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        //minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className="main-header navbar">
      <div className="col-search">
        <form className="searchform">
          <div className="input-group">
            <input
              list="search-terms"
              type="text"
              className="form-control"
              placeholder="Search term"
            />
            <button className="btn btn-light bg" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <datalist id="search-terms">
            <option value="Products"></option>
            <option value="New orders"></option>
            <option value="Apple iphone"></option>
            <option value="Something"></option>
          </datalist>
        </form>
      </div>
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-triger="#offcanvas_aside"
        >
          <i className="fas fa-bars md-28"></i>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link to="#" className={`nav-link btn-icon`} title="Dark mode">
              <i className="fas fa-moon"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className={`nav-link btn-icon`}>
              <i className="fas fa-bell"></i>
            </Link>
          </li>
          <li className="dropdown nav-item">
            <Link
              to="#"
              className={`dropdown-toggle`}
              data-bs-toggle="dropdown"
              id="dropdownMenuLink"
              role="button"
              aria-expanded="false"
            >
              <img
                src="https://static-admin-dashboard-example.netlify.app/images/favicon.png"
                className="img-xs rounded-circle"
                alt="User"
              />
            </Link>

            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuLink"
            >
              <Link to="#" className={`dropdown-item`}>
                My Profile
              </Link>
              <Link to="#" className={`dropdown-item`}>
                Settings
              </Link>
              <Link onClick={logoutHandler} to="#" className={`dropdown-item`}>
                Exit
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
