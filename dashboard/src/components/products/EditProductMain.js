import React from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";

const EditProductMain = (props) => {
  const { productId } = props;
  return (
    <>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Update Product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
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
                      value={productId.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Product Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_price"
                      required
                      value={productId.price}
                    />
                  </div>
                  <div className="mb-4">
                            <label htmlFor="product_count" className="form-label">Count in stock</label>
                            <input type="number"className="form-control" id="product_count" required value={productId.count}/>
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

export default EditProductMain;