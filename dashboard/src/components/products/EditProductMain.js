import React, { useEffect, useRef, useState } from "react";
import Toast from "./../LoadingError/Toast";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  productDetails,
} from "../../Redux/Actions/ProductActions";
import { PRODUCT_DETAIL_RESET, PRODUCT_EDIT_RESET } from "../../Redux/Constants/ProductConstants";
import Loading from "./../LoadingError/Loading";
import { toast } from "react-toastify";

const EditProductMain = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, error, loading } = useSelector(
    (state) => state.detailProduct
  );
  const {
    message,
    error: errorEdit,
    loading: loadingEdit,
  } = useSelector((state) => state.productEdit);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  const toastId = useRef(null);

  useEffect(() => {
    dispatch(productDetails(id));

    return () => {
      dispatch({ type: PRODUCT_DETAIL_RESET });
    };
  }, []);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setCountInStock(product.countInStock);
    }
  }, [product, message, errorEdit]);

  useEffect(() => {
    if (errorEdit) {
      toastId.current = toast.error(errorEdit, Toastobjects);
    }
    if (message) {
      toastId.current = toast.success(message.message, Toastobjects);
    }
    return () => {
      dispatch({ type:PRODUCT_EDIT_RESET});
    }
  }, [message, errorEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(id, name, description, countInStock, price));
  };
  return (
    <>
      <Toast></Toast>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        {loading ? (
          <Loading></Loading>
        ) : (
          <form onSubmit={handleSubmit}>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="product_description"
                        className="form-label"
                      >
                        Product Description
                      </label>
                      <textarea
                        type="text"
                        placeholder="Type here"
                        className="form-control"
                        id="product_description"
                        rows={7}
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="product_count" className="form-label">
                        Count in stock
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="product_count"
                        required
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default EditProductMain;
