import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link, useParams,useNavigate  } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";

const SigngleProduct = () => {
  const history = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const product_Details = useSelector((state) => state.productDetails);
const [qty,setQty]= useState(1);

  const { loading, error, product } = product_Details;
  useEffect(() => {
    dispatch(productDetails(id));
  }, [id, dispatch]);

  const AddToCartHander= (e)=>{
    e.preventDefault();
    history(`/cart/${id}?qty=${qty}`);
  }
  return (
    <>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>

                  <div className="product-count col-lg-7">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>RSD {product.price}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {product.countInStock > 0 ? (
                        <span>In Stock</span>
                      ) : (
                        <span>unavalible</span>
                      )}
                    </div>
                    <div className="flex-box d-fex justify-content-between align-items-center">
                      <h6>Reviews</h6>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                    </div>
                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-column">
                          <h6>Quantity</h6>
                          <select>
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button onClick={AddToCartHander} className="round-black-btn">Add To cart</button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">Reviews</h6>
                <Message variant={"alert-info mt-3"}>No Reviews</Message>
                <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                  <strong>Admin Doe</strong>
                  <Rating value={5} />
                  <span>Jan 23 2441</span>
                  <div className="alert alert-info mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    impedit minus aspernatur nobis libero pariatur quaerat,
                    natus unde cum vel eius ipsum voluptates nostrum saepe
                    expedita eaque. Possimus, veritatis culpa.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h6>Write a customer review</h6>
                <div className="my-4"></div>
                <form>
                  <div className="my-4">
                    <strong>Rating</strong>
                    <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                      <option value="">Select...</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <strong>Comment</strong>
                    <textarea
                      row="3"
                      className="col-12 bg-light p-3 mt-2 border-0 rounded"
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <button className="col-12 bg-black border-0 p-3 rounded text-white">
                      SUBMIT
                    </button>
                  </div>
                </form>
                <div className="my-3">
                  <Message variant={"alert-warning"}>
                    Please{" "}
                    <Link to="/login">
                      "<strong>Login</strong>"
                    </Link>{" "}
                    to write a review{" "}
                  </Message>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SigngleProduct;
