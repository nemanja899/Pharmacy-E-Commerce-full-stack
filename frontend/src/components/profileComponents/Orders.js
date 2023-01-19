import React from "react";

const Orders = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
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
                    <tr className={"alert-success"}>
                        <td>
                            <a href={"/"} className="link">
                                1
                            </a>
                        </td>
                        <td>Paid</td>
                        <td>Dec 12 2021</td>
                        <td>RSD 2500</td>
                    </tr>
                    <tr className={"alert-danger"}>
                        <td>
                            <a href={'/'} className="link">
                                2
                            </a>
                        </td>
                        <td>Not paid</td>
                        <td>Jan 24 2022</td>
                        <td>RSD 699</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Orders;
