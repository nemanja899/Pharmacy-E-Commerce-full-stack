import React from "react";
import { Link } from "react-router-dom";

const AddProductMain = () => {
  return (
    <>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Add product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish Now
              </button>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-sl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Product Title
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Product Price
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      id="product_price"
                      className="form-control"
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_count" className="form-label">Count in stock</label>
                    <input
                      type="number"
                      placeholder="Type here"
                      id="product_count"
                      className="form-control"
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_description" className="form-label">Product Description</label>
                    <textarea
                      type="text"
                      placeholder="Type here"
                      id="product_description"
                      className="form-control"
                      rows="7"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input className="form-control" type="text" placeholder="Enter Image url"></input>
                    <input className="form-control" type="file"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;