import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="" className="brand-wrap">
            <img
              src="/images/logo.png"
              style={{ height: "46" }}
              className="logo"
              alt="Pharmacy e-commerce admin"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>
        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                className={`menu-link ${props.active==="home" ?"active":""}`}
                to="/"
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={`menu-link ${props.active==="products" ?"active":""}`}
                to="/products"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Products</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={`menu-link ${props.active==="addproducts" ?"active":""}`}
                to="/addproduct"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Add product</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={`menu-link ${props.active==="category" ?"active":""}`}
                to="/category"
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Categories</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={`menu-link ${props.active==="orders" ?"active":""}`}
                to="/orders"
              >
                <i className="icon fa fa-shopping-bag"></i>
                <span className="text">Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={`menu-link ${props.active==="users" ?"active":""}`}
                to="/users"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Users</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={`menu-link ${props.active==="sellers" ?"active":""}`}
                to="/sellers"
              >
                <i className="icon fas fa-store-alt"></i>
                <span className="text">Sellers</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link disabled"
                to="/transaction"
              >
                <i className="icon fa fa-university"></i>
                <span className="text">Transactions</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
