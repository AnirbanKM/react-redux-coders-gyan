import { configureStore } from '@reduxjs/toolkit';
import cartReducerSlice from './cartSlice';
import productReducer from './productSlice';

const store = configureStore({
    reducer: {
        cart: cartReducerSlice,
        product: productReducer
    },
});


export default store;