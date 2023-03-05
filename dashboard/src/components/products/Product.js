import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../Redux/Actions/ProductActions";

const Product = (props) => {
  const { product, sort } = props;
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteProduct(product._id, sort));
    }
  };
  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <Link to="" className="img-wrap">
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link to="" className="title text-truncate">
              {product.name}
            </Link>
            <div className="price mb-2">{product.price} RSD</div>
            <div className="row">
              <Link
                to={`/product/${product._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to=""
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                onClick={(e)=>{handleDelete(e)}}
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
