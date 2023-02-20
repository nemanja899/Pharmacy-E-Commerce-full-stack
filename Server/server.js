import express  from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import DataImport from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";

dotenv.config();
connectDatabase();
const app=express();

//API routes
app.use("/api/import", DataImport);
app.use("/api/products", productRoute);

//error routes
app.use(notFound);
app.use(errorHandler);


const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`server is starting on port ${PORT}...`));