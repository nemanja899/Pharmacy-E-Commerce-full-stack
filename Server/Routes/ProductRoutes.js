import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/Product.js";
import protect from "../Middleware/AuthMiddleware.js";

const productRoute = express.Router();

//get all products
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 4;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({products,page,pages:Math.ceil(count/pageSize)});
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

//product review
productRoute.post(
  "/:id/review",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      const { rating, comment } = req.body;
      if (product) {
        const alreadyReviewd = await product.reviews.find(
          (r) => r.user.toString() === req.user._id.toString()
        );
        if (alreadyReviewd) {
          res.status(400);
          throw new Error("Product aready Reviewed");
        }
        const review = {
          name: req.user.name,
          rating: Number(rating),
          comment,
          user: req.user._id,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
          product.reviews.reduce((acc, item) => acc + item.rating, 0) /
          product.reviews.length;

        await product.save();
        res.status(201);
        res.json({ message: "Review Added", product });
      } else {
        res.status(404);
        throw new Error("Product not found");
      }
    } catch (err) {
      res.status(404);
      throw new Error(err.message);
    }
  })
);

export default productRoute;
