import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import Order from "../Models/Order.js";

const orderRouter = express.Router();

//LOGIN
orderRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAdress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
    } else {
      const order = new Order({
        orderItems,
        shippingAdress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user: req.user._id,
      });
      const createOrder = await order.save();
      res.status(201);
      res.json(createOrder);
    }
  })
);

//order details
orderRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    console.log("daaaaa");
    const order = await Order.findById(id).populate("user", "name email");
    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
);

//order is paid
orderRouter.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const order = await Order.findById(id).populate("user", "name email");

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_adress: req.body.email_adress,
      };
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
);

//user login orders

orderRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
   
      res.json(orders);
  
  })
);

export default orderRouter;
