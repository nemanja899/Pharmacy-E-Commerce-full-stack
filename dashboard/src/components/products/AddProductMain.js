import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/Actions/ProductActions";
import Loading from "./../LoadingError/Loading";
import { toast } from "react-toastify";
import Toast from "../LoadingError/Toast";
import { PRODUCT_ADD_RESET } from "../../Redux/Constants/ProductConstants";

const AddProductMain = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const { loading, error, message } = useSelector((state) => state.productAdd);

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  const toastId = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(price, count, name, description, url));
  };

  useEffect(() => {
    if (message) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success(message, Toastobjects);
      }
      setName("");
      setPrice(0);
      setCount(0);
      setDescription("");
      setUrl("");
    }
    if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(error, Toastobjects);
      }
    }
    setTimeout(() => {
      dispatch({ type: PRODUCT_ADD_RESET });
    }, 3000);
  }, [message, dispatch, error]);

  return (
    <>
      <Toast></Toast>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        {loading && <Loading></Loading>}
        <form onSubmit={handleSubmit}>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_count" className="form-label">
                      Count in stock
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      id="product_count"
                      className="form-control"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_description" className="form-label">
                      Product Description
                    </label>
                    <textarea
                      type="text"
                      placeholder="Type here"
                      id="product_description"
                      className="form-control"
                      rows="7"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image url"
                      onChange={(e) => setUrl(e.target.value)}
                      value={url}
                    ></input>
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
