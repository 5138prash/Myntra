import Order from "../models/order.model.js";

// ✅ Create new order
const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    return res.status(201).json({ message: "Order created successfully.", order });
  } catch (error) {
    return res.status(400).json({ message: "Order creation failed", error: error.message });
  }
};

// ✅ Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }) // ✅ filter by user
      .populate("user")
      .populate("items.product");
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(400).json({ message: "Can't fetch orders", error: error.message });
  }
};


// ✅ Get order by ID
const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate("user").populate("items.product");
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.status(200).json({ order });
  } catch (error) {
    return res.status(400).json({ message: "Failed to fetch order", error: error.message });
  }
};

// ✅ Update order by ID
const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.status(200).json({ message: "Order updated successfully", order });
  } catch (error) {
    return res.status(400).json({ message: "Failed to update order", error: error.message });
  }
};

// ✅ Delete order by ID
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndDelete(id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Failed to delete order", error: error.message });
  }
};

export {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,

};
