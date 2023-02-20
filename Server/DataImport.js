import express from "express";
import User from "./Models/User.js";
import Product from "./Models/Product.js";
import users from "./data/Users.js";
import products from "./data/Products.js";
import asyncHandler from "express-async-handler";

const DataImport = express.Router();

DataImport.post("/user",asyncHandler(async(req,res)=>{
    await User.remove({});
    const importUser= await User.insertMany(users);
    res.send({importUser});
}));

DataImport.post("/products",asyncHandler( async(req,res)=>{
    await Product.remove({});
    const imporProduct= await Product.insertMany(products);
    res.send({imporProduct});
}));

export default DataImport;