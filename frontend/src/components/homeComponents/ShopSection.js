import Pagination from "./Pagination";

import { Link } from "react-router-dom";
import Rating from "./Rating";
import axios from "axios";
import React,{useEffect, useState} from "react";

const ShopSection =()=>{
    const [products, setProducts] =useState([]);

    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const response=await axios.get("/api/products");
                setProducts(response.data);
            }catch(e){
                console.log(e);
            }
           
        };
        fetchData();
    }, []);

    return (
        <>
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 article">
                        <div className="shopcontainer row">
                            {products.map((product)=>(
                                <div className="shop col-lg-4 col-md-6 col-sm-6" key={product._id}>
                                    <div className="border-product">
                                        <Link to={`/products/${product._id}`}>
                                            <div className="shopBack">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                        </Link>

                                        <div className="shoptext">
                                            <p>
                                                <Link to={`/products/${product._id}`}>
                                                    {product.name}
                                                </Link>
                                            </p>
                                            <Rating 
                                            value={product.rating}
                                            text={`${product.numReviews} reviews`}/>
                                            <h3>RSD {product.price}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ShopSection;