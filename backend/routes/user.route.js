import express from 'express'
import { deleteUser, login, logout, register } from '../controllers/user.controller.js';
import authentication from '../middlewares/user.middleware.js';

const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.post('/logout', logout)
userRoute.delete('/:id', authentication ,deleteUser)


export default userRoute;