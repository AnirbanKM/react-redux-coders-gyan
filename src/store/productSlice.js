const { createSlice } = require("@reduxjs/toolkit");

const STATUSES = Object.freeze({
    IDEL: 'idel',
    ERROR: 'error',
    LOADING: 'loading'
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDEL,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
    }
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;


// Thunks
export function fetchProduct() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));

        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
        } catch (error) {

        }
    }
}