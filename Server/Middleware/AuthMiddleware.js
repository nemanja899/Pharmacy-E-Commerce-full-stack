import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/User.js";


const protect=asyncHandler(
    async(req,res,next)=>{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
           try{
            token = req.headers.authorization.split(" ");
            const decoded=jwt.verify(token,process.env.JW_SECRET);
            req.user=await User.findById(decoded.id).select("-password");
            next();
           }catch(err){
            console.log(err);
            res.status(401);
            throw new Error("Not authorized token failed");
           }
        }
        if(!token){
            res.status(401);
            throw new Error("Not authorized, no token found");
        }
    }
);

export default protect;