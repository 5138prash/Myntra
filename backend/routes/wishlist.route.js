import express from 'express';
import authentication from '../middlewares/user.middleware.js';
import { addToWishlist, clearWishlist, getWishlistByUser, removeFromWishlist } from '../controllers/wishlist.controller.js';


const wishlistRouter = express.Router();

wishlistRouter.post("/",  addToWishlist);
wishlistRouter.get("/:userId", authentication, getWishlistByUser);
wishlistRouter.delete("/remove", authentication, removeFromWishlist);
wishlistRouter.delete("/:userId", authentication, clearWishlist);

export default wishlistRouter;