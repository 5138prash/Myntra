import express from 'express';
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from '../controllers/category.controller.js';
import isAdmin from "../middlewares/isAdmin.middleware.js";
import authentication from "../middlewares/user.middleware.js"


const categoryRoute = express.Router();

categoryRoute.post("/", createCategory);
categoryRoute.get("/", getAllCategories);
categoryRoute.get("/:id", getCategoryById);
categoryRoute.put("/:id",authentication, isAdmin, updateCategory);
categoryRoute.delete("/:id",authentication, isAdmin, deleteCategory);

export default categoryRoute;