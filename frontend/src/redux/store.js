import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './slice/productSlice';
import authReducer from './slice/authSlice'

export const store = configureStore({
    reducer: {
        product: ProductReducer,
        auth: authReducer,
    },
})