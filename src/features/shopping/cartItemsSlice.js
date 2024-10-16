import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
    name:'cartItems',
    initialState: [],
    reducer:{
        addCart: (state,action) => {
            console.log(action)
            return state;
        },
        removeCart: (state,action) => {
            console.log(action);
            return state;
        }
    }
})

export const {addCart,removeCart} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;