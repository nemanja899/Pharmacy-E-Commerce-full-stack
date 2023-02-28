import React from "react";

const ProductStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products Statistics</h5>
          <img
            src="https://static-admin-dashboard-example.netlify.app/images/product.png"
            style={{ width: "100%", height: "350px", objectFit: "contain" }}
          />
        </article>
      </div>
    </div>
  );
};
export default ProductStatistics;