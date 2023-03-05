import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale Statistics</h5>
          <iframe
          title="Paid orders"
            style={{background: "#FFFFFF",border: "none",borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}}
            width="100%"
            height="350px"
            src="https://charts.mongodb.com/charts-pharmacy-shop-project-pqoyb/embed/charts?id=6404a837-e1ba-4d4d-8cdf-3db4bcfc4c6e&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
          
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
