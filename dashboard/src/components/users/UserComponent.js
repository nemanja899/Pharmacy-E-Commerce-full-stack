import React from "react";
import { Link } from "react-router-dom";

const UserComponent = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
        <div>
          <Link to="" className="btn btn-primary">
            <i className="material-icons md-plus"></i>Create new
          </Link>
        </div>
      </div>
      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              ></input>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status: all</option>
                <option>Active only</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            <div className="col">
              <div className="card card-user shadow-sm">
                <div className="card-header">
                  <img
                    className="img-md img-avatar"
                    alt="Admin"
                    src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433__480.png"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mt-5"></h5>
                  <div className="card-text text-muted">
                    <p className="m-0"></p>
                    <p>
                      <a href={`mailto:`}></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-user shadow-sm">
                <div className="card-header">
                  <img
                    className="img-md img-avatar"
                    alt="User"
                    src="https://th.bing.com/th/id/R.9d55df45efd4433821fd7c19179b104b?rik=amxhZ%2fSwil5pLQ&pid=ImgRaw&r=0"
                  />{" "}
                </div>
                <div className="card-body">
                  <h5 className="card-title mt-5"></h5>
                  <div className="card-text text-muted">
                    <p className="m-0"></p>
                    <p>
                      <a href={`mailto:`}></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;