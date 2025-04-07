import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.controller.js";
import authentication from "../middlewares/user.middleware.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";

const productsRoute = express.Router();

productsRoute.get('/', getAllProducts);
productsRoute.get('/:id', getProduct);
productsRoute.post('/create', authentication,  createProduct );
productsRoute.put('/:id',  authentication, isAdmin, updateProduct);
productsRoute.delete('/:id', authentication, isAdmin, deleteProduct);

export default productsRoute;