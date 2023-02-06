const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            // Directly mutate the state
            state.push(action.payload);
        },
        remove(state, action) {
            // product id = action.payload
            return state.filter(item => item.id !== action.payload)
        }
    }
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;