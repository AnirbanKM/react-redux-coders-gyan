import { configureStore } from '@reduxjs/toolkit';
import cartReducerSlice from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducerSlice
    },
});


export default store;