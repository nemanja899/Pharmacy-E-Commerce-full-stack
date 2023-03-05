import React from "react";

const TopTotal = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <iframe
            title="Total revenue"
            width="100%"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              objectFit: "fit",
            }}
            src="https://charts.mongodb.com/charts-pharmacy-shop-project-pqoyb/embed/charts?id=6404aa04-058e-4bee-8fdc-ecc495ef06b1&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <iframe
            title="Total Orders"
            width="100%"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              objectFit: "fit",
            }}
            src="https://charts.mongodb.com/charts-pharmacy-shop-project-pqoyb/embed/charts?id=6404acf0-a859-4f16-87d6-0f6841b79b55&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              objectFit: "fit",
            }}
            title="Total products available"
            width="100%"
            src="https://charts.mongodb.com/charts-pharmacy-shop-project-pqoyb/embed/charts?id=6404ada3-70e0-4a8f-8298-5494f883c299&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
