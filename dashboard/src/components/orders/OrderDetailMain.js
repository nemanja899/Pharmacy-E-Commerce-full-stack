import React, { useEffect } from "react";
import OrderDetailProducts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getOrderDetail } from "../../Redux/Actions/OrderActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { ORDER_DETAILS_RESET } from "../../Redux/Constants/OrderConstants";
import moment from "moment";
const OrderDetailMain = ({ id }) => {
  const dispatch = useDispatch();
  const { loading, order, error } = useSelector((state) => state.orderDetail);

  useEffect(() => {
    if (!order) {
      dispatch(getOrderDetail(id));
    }
  }, [dispatch, order]);

  useEffect(() => {
    return () => {
      dispatch({ type: ORDER_DETAILS_RESET });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deliverOrder(id));
    dispatch(getOrderDetail(id));
  };
  return (
    <section className="content-main">
      <div className="content-header">
        <Link to="/orders" className="btn btn-dark text-white">
          Back to Orders
        </Link>
      </div>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="card">
          <div className="card-header p-3 Header-green">
            <header className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <span>
                  <i className="far fa-calendar-alt mx-2"></i>
                  <b className="text-white">
                    {moment(order.createdAt).format("llll")}
                  </b>
                </span>
                <br />
                <small className="text-white mx-3">Order ID:{id}</small>
              </div>
              <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                <select
                  className="form-select d-inline-block"
                  style={{ maxWidth: "200px" }}
                >
                  <option>Change status</option>
                  <option>Awaiting payment</option>
                  <option>Confirmed</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
                <Link className="btn btn-success ms-2" to="">
                  <i className="fas fa-print"></i>
                </Link>
              </div>
            </header>
          </div>
          <div className="card-body">
            <OrderDetailInfo order={order} />
            <div className="row">
              <div className="col-lg-9">
                <div className="table-table-responsive">
                  <OrderDetailProducts order={order} loading={loading} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box shadow-sm bg-light">
                  {order.isDelivered ? (
                    <button disabled={true} className="btn btn-success col-12">
                      Delivered
                      <span className="mx-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </button>
                  ) : (
                    <button
                      className="btn btn-dark col-12"
                      onClick={handleSubmit}
                    >
                      Mark as delivered
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderDetailMain;
