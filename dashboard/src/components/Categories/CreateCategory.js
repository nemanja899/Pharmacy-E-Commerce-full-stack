import React from "react";

const CreateCategory = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="product_name"
            placeholder="Type here"
          ></input>
        </div>
        <div className="mb-4">
          <label className="form-label">Name</label>
          <input className="form-control" type="file"></input>
        </div>
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Type here"
          ></textarea>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Create category</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;