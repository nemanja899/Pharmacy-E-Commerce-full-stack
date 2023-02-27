import React from "react";
import moment from "moment";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { Link } from "react-router-dom";

const Orders = (props) => {
  const { orders, loading, error } = props;

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <>
          {orders.length === 0 ? (
            <div className="col-12 alert alert-info text-center mt-3">
              No Orders
              <Link
                className="btn btn-success mx-2 px-3 py-2"
                to="/"
                style={{ fontSize: "12px" }}
              >
                START SHOPPING
              </Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>Date</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr
                      className={`alert ${
                        order.isPaid ? "alert-success" : "alert-danger"
                      } `}
                      role="alert"
                    >
                      <td>
                        <a href={`/order/${order._id}`} className="link">
                          {order._id}
                        </a>
                      </td>
                      <td>{order.isPaid ? "Paid" : "Not Paid"}</td>
                      <td>
                        {order.isPaid
                          ? moment(order.paidAt).calendar()
                          : moment(order.createdAt).calendar()}
                      </td>
                      <td>RSD {order.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
