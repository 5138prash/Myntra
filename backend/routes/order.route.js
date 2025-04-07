import express from 'express';
import { createOrder, deleteOrder, getAllOrders, getOrder,updateOrder } from '../controllers/order.controller.js';
import authentication from '../middlewares/user.middleware.js';

const orderRouter = express.Router();


orderRouter.get('/:id', authentication, getOrder);
orderRouter.get("/",authentication, getAllOrders);
orderRouter.post('/',authentication, createOrder);
orderRouter.put("/:id",authentication, updateOrder);
orderRouter.delete("/:id",authentication, deleteOrder);

export default orderRouter;