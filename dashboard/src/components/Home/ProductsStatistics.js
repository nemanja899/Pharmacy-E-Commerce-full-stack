import React from "react";

const ProductStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products Statistics</h5>
          <iframe
            title="Top Selling Items Statistics"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: " 0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="100%"
            height="350px"
            src="https://charts.mongodb.com/charts-pharmacy-shop-project-pqoyb/embed/charts?id=64049773-70e0-429e-8feb-5494f8727c87&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};
export default ProductStatistics;
