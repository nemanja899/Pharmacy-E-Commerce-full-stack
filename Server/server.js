import express  from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import DataImport from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRouts.js";
import orderRouter from "./Routes/OrderRoutes.js";

dotenv.config();
connectDatabase();
const app=express();
app.use(express.json());

//API routes
app.use("/api/import", DataImport);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/config/paypal", (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_SECRET_ID);
});

//error routes
app.use(notFound);
app.use(errorHandler);


const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`server is starting on port ${PORT}...`));