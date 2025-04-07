import Category from "../models/category.model.js";

// Create a new category
const createCategory = async (req, res) => {
  try {
    const { name, slug, subCategories } = req.body;

    const existing = await Category.findOne({ slug });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const category = new Category({ name, slug, subCategories });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

//  Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

//  Get a single category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

//  Update a category
const updateCategory = async (req, res) => {
  try {
    const { name, slug, subCategories } = req.body;

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, slug, subCategories },
      { new: true }
    );

    if (!category) return res.status(404).json({ message: 'Category not found' });

    res.json(category);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

//  Delete a category
 const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

export {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}