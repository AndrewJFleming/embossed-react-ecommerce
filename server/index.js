import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoute from "./routes/products.js";
import userRoutes from "./routes/users.js";
import categoryRoutes from "./routes/category.js";
import cartRoute from "./routes/cart.js";
import saleRoute from "./routes/sales.js";
// const stripeRoute = require("./routes/stripe");

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Greeting route
app.get("/", (req, res) => {
  res.send("Hello world...");
});

app.use("/users", userRoutes);
app.use("/products", productRoute);
app.use("/categories", categoryRoutes);
app.use("/carts", cartRoute);
app.use("/sales", saleRoute);
// app.use("/api/checkout", stripeRoute);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));
