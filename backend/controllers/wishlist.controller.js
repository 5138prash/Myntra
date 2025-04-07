import mongoose from "mongoose";
import Wishlist from "../models/wishlist.model.js";


// Add Product to Wishlist
const addToWishlist = async (req, res) => {
  const { user, products } = req.body;

  try {
    let wishlist = await Wishlist.findOne({ user: user });

    if (!wishlist) {
      wishlist = await Wishlist.create({ user: user, products: [products] });
    } else {
      if (!wishlist.products.includes(products)) {
        wishlist.products.push(products);
        await wishlist.save();
      }
    }

    return res.status(200).json({ message: "Product added to wishlist", wishlist });
  } catch (error) {
    return res.status(400).json({ message: "Failed to add to wishlist", error: error.message });
  }
};

// Get Wishlist by User
const getWishlistByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ user: userId }).populate("products");
    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });

    return res.status(200).json({ wishlist });
  } catch (error) {
    return res.status(400).json({ message: "Failed to fetch wishlist", error: error.message });
  }
};

// Remove Product from Wishlist
const removeFromWishlist = async (req, res) => {
  const { user, products } = req.body;

  try {
    const wishlist = await Wishlist.findOne({ user: user });
    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });

    const objectProductId = new mongoose.Types.ObjectId(products);

    wishlist.products = wishlist.products.filter(
      (item) => !item.equals(objectProductId)
    );

    await wishlist.save();

    return res.status(200).json({ message: "Product removed from wishlist", wishlist });
  } catch (error) {
    return res.status(400).json({ message: "Failed to remove product", error: error.message });
  }
};

// Clear Wishlist
const clearWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });

    wishlist.products = [];
    await wishlist.save();

    return res.status(200).json({ message: "Wishlist cleared", wishlist });
  } catch (error) {
    return res.status(400).json({ message: "Failed to clear wishlist", error: error.message });
  }
};

export {
  addToWishlist,
  getWishlistByUser,
  removeFromWishlist,
  clearWishlist,
};
