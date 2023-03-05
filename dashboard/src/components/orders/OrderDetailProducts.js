import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOrderDetail } from "../../Redux/Actions/OrderActions";
const OrderDetailProducts = ({ order, loading }) => {
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  if (!loading) {
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }
  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Product</th>
          <th style={{ width: "20%" }}>Unit Price</th>
          <th style={{ width: "20%" }}>Quantity</th>
          <th style={{ width: "20%" }} className="text-end">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside">
                <div className="left">
                  <img
                    src={item.image}
                    style={{ width: "40px", height: "40px" }}
                    className="image-xs"
                    alt={item.name}
                  />
                </div>{" "}
                <div className="info">{item.name}</div>
              </Link>
            </td>
            <td>{item.price} RSD</td>
            <td>{item.qty}</td>
            <td className="text-end">{item.price * item.qty} RSD</td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Subtotal:</dt>
                <dd>{order.itemsPrice} RSD</dd>
              </dl>
              <dl className="dlist">
                <dt>Shipping cost:</dt>
                <dd>{order.shippingPrice} RSD</dd>
              </dl>
              <dl className="dlist">
                <dt>Tax cost:</dt>
                <dd>{order.taxPrice} RSD</dd>
              </dl>
              <dl className="dlist">
                <dt>Grand total:</dt>
                <dd>
                  <b className="h5">{order.totalPrice} RSD</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted"> Status:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-sucess">
                      Payment done
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      Not paid
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
