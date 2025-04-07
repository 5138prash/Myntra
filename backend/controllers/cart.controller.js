import Cart from "../models/cart.model.js";

// Add to Cart or Update Quantity
const addToCart = async (req, res) => {
  const { user } = req.body;
  const { product, quantity, selectedSize, selectedColor } = req.body;

  try {
    let cart = await Cart.findOne({ user: user });

    if (!cart) {
      cart = new Cart({
        user: user,
        items: [{ product, quantity, selectedSize, selectedColor }],
      });
    } else {
      const existingItemIndex = cart.items.findIndex(
        (item) =>
          item.product.toString() === product &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ product, quantity, selectedSize, selectedColor });
      }
    }

    await cart.save();
    return res.status(200).json({ message: "Cart updated", cart });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to update cart", error: error.message });
  }
};

// Get Cart by User
const getCartByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    return res.status(200).json({ cart });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to fetch cart", error: error.message });
  }
};

// Remove Item from Cart
const removeFromCart = async (req, res) => {
  const user = req.user._id;
  console.log("user",user) // authentication middleware se
  const { productId, selectedSize, selectedColor } = req.body;

  try {
    const cart = await Cart.findOne({ user });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const initialLength = cart.items.length;

    cart.items = cart.items.filter((item) => {
      return !(
        item.product.toString() === productId &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
      );
    });

    if (cart.items.length === initialLength) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    await cart.save();
    return res.status(200).json({ message: "Item removed", cart });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to remove item", error: error.message });
  }
};

// Clear Entire Cart
const clearCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOneAndDelete({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    return res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to clear cart",
      error: error.message,
    });
  }
};


export { addToCart, getCartByUser, removeFromCart, clearCart };
