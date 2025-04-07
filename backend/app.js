import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import productsRoute from "./routes/product.route.js";
import cartRoute from "./routes/cart.route.js";
import categoryRoute from "./routes/category.route.js";
import orderRouter from "./routes/order.route.js";
import wishlistRouter from "./routes/wishlist.route.js";

dotenv.config();
const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
  allowedHeaders: ['Content-Type', 'Authorization'], // your frontend port
  credentials: true
}));

app.use(cookieParser());

app.use("/api/user", userRoute);
app.use("/api/products", productsRoute);
app.use("/api/cart", cartRoute);
app.use("/api/category", categoryRoute);
app.use("/api/order", orderRouter);
app.use("/api/wishlist", wishlistRouter);

app.get("/", (req, res) => {
  res.status(200).send("Backend is Running properly!");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
