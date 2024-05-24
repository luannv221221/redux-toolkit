import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../reducers/counterSlice';
import categorySlice from '../reducers/categorySlice';
import productSlice from '../reducers/productSlice';

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        categories:categorySlice,
        products:productSlice
    }
});