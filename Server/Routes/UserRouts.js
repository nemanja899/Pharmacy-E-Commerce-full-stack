import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import User from "../Models/User.js";
import generateToken from "../utils/generateToken.js";

const userRouter = express.Router();

//LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

//REGISTER

userRouter.post(
  "/",

  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
   
    if (userExist) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User data");
    }
  })
);

//PROFILE
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
   
    if (user) {
      res.json({
        _id: user._id,
        name:user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);


//UPDATE Profile
userRouter.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name= req.body.name || user.name
      user.email= req.body.email || user.email
      if(req.body.password){
        user.password= req.body.password;
      }
      const updateUser =await user.save();
      res.json({
        _id: updateUser._id,
        name:updateUser.name,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
        createdAt: updateUser.createdAt,
        token: generateToken(updateUser._id),
      })
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

export default userRouter;
