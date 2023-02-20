import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/Product.js";

const productRoute = express.Router();

//ge all products
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//get product by id
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
        console.log("Product was found");
      } else {
        res.status(404);
        throw new Error("Product not found");
      }
    } catch (err) {
        res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default productRoute;
