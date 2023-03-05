import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Product from "./Product";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const MainProduct = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );

  const { loading:loadingDelete, error:errorDelete, message } = useSelector(
    (state) => state.productDelete
  );

  const [sort,setSort]=useState("latest");

  useEffect(() => {
    dispatch(listProduct(sort));
    console.log(sort);
  }, [dispatch,sort]);
  return (
    <section className="content-main">
      <div className="content-header">
        <h3 className="cintent-title">Product</h3>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="search"
                className="form-control p-2"
                placeholder="Search..."
              ></input>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select" onChange={(e)=>setSort(e.target.value)}>
                <option value="latest">Latest added</option>
                <option value="cheapest">Cheap first</option>
                <option value="most_viewed">Most viewed</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          {
            errorDelete && (<Message variant={"alert-danger"}>{errorDelete}</Message>)
          }
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {products.map((product) => (
                <Product product={product} sort={sort} key={product._id} />
              ))}
            </div>
          )}

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link to="" className="page-link">
                  Previous
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainProduct;
