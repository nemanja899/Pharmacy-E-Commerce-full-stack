import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <table className="table">
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
      <tbody>
        <tr>
            <td>
                <b></b>
            </td>
            <td></td>
            <td></td>
            <td><span className="badge rounded-pill alert-success"></span></td>
            <td></td>
            <td><span className="badge btn-success"></span></td>
            <td className="d-flex justify-content-end align-items-center">
                <Link to={`/order`} className="text-success"></Link>
            </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Orders;