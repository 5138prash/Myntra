import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // e.g., "Men", "Women"
    slug: { type: String, required: true, unique: true }, // e.g., "men", "women"
    subCategories: [
      {
        name: String, // e.g., "T-Shirts"
        slug: String, // e.g., "t-shirts"
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
