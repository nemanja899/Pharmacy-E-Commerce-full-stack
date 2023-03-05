import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/Product.js";
import { protect, admin } from "../Middleware/AuthMiddleware.js";

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
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

//add products
productRoute.post(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { name, description, countInStock, price, image } = req.body;
    const productExists = await Product.findOne({ name });

    if (!productExists) {
      const product = new Product({
        name,
        description,
        countInStock,
        price,
        image,
      });
      if (product) {
        res.status(201);
        await product.save();
        res.json( "Product saved successfully" );
      } else {
        res.status(400);
        throw new Error("invalid product data");
      }
    } else {
      res.status(400);
      throw new Error("Error product name already exists");
    }
  })
);

//edit product

productRoute.put(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { name, description, countInStock, price, image } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      (product.name = name || product.name),
        (product.descripti = description || product.description),
        (product.countInStock = countInStock || product.countInStock),
        (product.price = price || product.price),
        (product.image = image || product.image),
        res.status(201);
      await product.save();
      res.json({ message: "Product updated successfully" });
    } else {
      req.status(400);
      throw new Error("Product not found");
    }
  })
);

//admin get all products
productRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const sort = req.query.sort;
    let products;
    if (sort) {
      switch (sort) {
        case "latest":
          products = await Product.find({}).sort({ createdAt: -1 });
          break;
        case "cheapest":
          products = await Product.find({}).sort({ price: 1 });
          break;
        default:
          products = await Product.find({}).sort({ _id: -1 });
      }
    }

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

productRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    await Product.findByIdAndDelete(id, async (err, product) => {
      if (err) {
        throw new Error(err.message);
      } else {
      }
    });
    res.json({ message: "Product is deleted successfully" });
  })
);

export default productRoute;
