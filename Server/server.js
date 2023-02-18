import express  from "express";
import products from "./data/Products.js";

const app=express();
//load products
app.get("/api/products", (req, res) => {
    res.json(products);
});

//load one product

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id == req.params.id);
    res.json(product);
});

app.get("/", (req, res) => {
    res.send("Api is Running on port...");
});


app.listen(5000,console.log("server is starting on port 5000..."));