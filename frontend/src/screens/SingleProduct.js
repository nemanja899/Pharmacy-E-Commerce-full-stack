import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link, useParams, useNavigate } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  productCreateReviews,
  productDetails,
} from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import moment from "moment";

const SigngleProduct = () => {
  const history = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const product_Details = useSelector((state) => state.productDetails);
  const productCreateReview = useSelector((state) => state.productCreateReview);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { loading, error, product } = product_Details;
  const {
    loading: createReviewLoading,
    error: createReviewError,
    success: successCreateReview,
  } = productCreateReview;
  useEffect(() => {
    if (successCreateReview) {
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(productDetails(id));
  }, [id, dispatch, successCreateReview]);

  useEffect(() => {
    if (createReviewError) {
      setTimeout(() => {
        dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
      }, 5000);
    }
  }, [createReviewError]);

  const AddToCartHander = (e) => {
    e.preventDefault();
    history(`/cart/${id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(productCreateReviews(id, { rating, comment }));
  };
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
                          <select
                            name="qty"
                            value={qty}
                            onChange={(e) => {
                              if (e.target.name === "qty") {
                                setQty(e.target.value);
                              }
                            }}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button
                          onClick={AddToCartHander}
                          className="round-black-btn"
                        >
                          Add To cart
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">Reviews</h6>
                {product.reviews.length === 0 && (
                  <Message variant={"alert-info mt-3"}>No Reviews</Message>
                )}
                {product.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <span>{moment(review.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      {review.comment}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h6>Write a customer review</h6>
                <div className="my-4"></div>
                {createReviewLoading && <Loading></Loading>}
                {createReviewError && (
                  <Message variant="alert-danger">{createReviewError}</Message>
                )}
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <div className="my-4">
                      <strong>Rating</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                        <option value="">Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>Comment</strong>
                      <textarea
                        row="3"
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        disabled={createReviewLoading}
                        className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Please{" "}
                      <Link to="/login">
                        "<strong>Login</strong>"
                      </Link>{" "}
                      to write a review{" "}
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SigngleProduct;
