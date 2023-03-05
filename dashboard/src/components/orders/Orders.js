import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Redux/Actions/OrderActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import moment from "moment";
import { ORDER_ALL_RESET } from "../../Redux/Constants/OrderConstants";

const Orders = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.orderAll);

  useEffect(() => {
    if (!orders || orders.length === 0) {
      dispatch(getAllOrders());
    }
  }, [dispatch, orders]);
  
  useEffect(() => {
    return () => {
      dispatch({ type: ORDER_ALL_RESET });
    };
  }, []);
  return (
    <table className="table">
      <>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Total</th>
            <th scope="col">Paid</th>
            <th scope="col">Date</th>
            <th>Status</th>
            <th scope="col" className="text-end">
              Action
            </th>
          </tr>
        </thead>
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <b>{order.user.name}</b>
                </td>
                <td>{order.user.email}</td>
                <td>{order.totalPrice} RSD</td>
                <td>
                  {order.isPaid ? (
                    <span className="badge rounded-pill bg-success">
                      Paid At {moment(order.paidAt).format("Do MMM YY")}
                    </span>
                  ) : (
                    <span className="badge rounded-pill bg-danger">
                      Not paid
                    </span>
                  )}
                </td>
                <td>{moment(order.createdAt).format("Do MMM YY")}</td>
                <td>
                  {order.isDelivered ? (
                    <span className="badge bg-success">Delivered</span>
                  ) : (
                    <span className="badge bg-dark">Not delivered</span>
                  )}
                </td>
                <td className="d-flex justify-content-end align-items-center">
                  <Link to={`/order/${order._id}`} className="text-success">
                    <i className="fas fa-eye"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </>
    </table>
  );
};

export default Orders;
