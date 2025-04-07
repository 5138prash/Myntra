import express from "express";
import authentication from "../middlewares/user.middleware.js";
import {
  addToCart,
  getCartByUser,
  removeFromCart,
  clearCart,
} from "../controllers/cart.controller.js";

const cartRoute = express.Router();
cartRoute.use(authentication);

cartRoute.post("/", addToCart);
cartRoute.get("/:userId", getCartByUser);
cartRoute.delete("/remove", removeFromCart);
cartRoute.delete("/clear/:userId", clearCart);

export default cartRoute;
