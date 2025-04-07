import Product from "../models/product.model.js";

// Create Product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json({ message: "Product created successfully.", product });
  } catch (error) {
    return res.status(400).json({ message: "Product creation failed.", error: error.message });
  }
};
 
// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate("category"); // populates category info
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(400).json({ message: "Can't fetch products", error: error.message });
  }
};

// Get Single Product
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate("category");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(400).json({ message: "Failed to get product", error: error.message });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    return res.status(400).json({ message: "Failed to update product", error: error.message });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error in deleting product", error: error.message });
  }
};
 
export {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
};
