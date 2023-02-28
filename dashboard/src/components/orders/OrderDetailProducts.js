import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = () => {
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
      <tr>
        <td>
          <Link className="itemside">
            <div className="left">
              <img />
            </div>{" "}
            <div className="info"></div>
          </Link>
        </td>
        <td></td>
        <td></td>
        <td className="text-end"></td>
      </tr>
      <tr>
        <td colSpan="4">
          <article className="float-end">
            <dl className="dlist">
              <dt>Subtotal:</dt>
              <dd></dd>
            </dl>
            <dl className="dlist">
              <dt>Shipping cost:</dt>
              <dd></dd>
            </dl>
            <dl className="dlist">
              <dt>Grand total:</dt>
              <dd></dd>
            </dl>
            <dl className="dlist">
              <dt className="text-muted"> Status:</dt>
              <dd>
                <span className="badge rounded-pill alert alert-success text-sucess"></span>
              </dd>
            </dl>
          </article>
        </td>
      </tr>
    </tbody>
  </table>;
};

export default OrderDetailProducts;