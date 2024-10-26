import { createSlice } from "@reduxjs/toolkit";


const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState:[],
  reducers: {
    addCartItem: (state, action) => {
      state.push(action.payload)
    },
    removeCartItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseCartItemQuantity: (state, action) => {
      console.log(action);
      return state;
    },
    decreaseCartItemQuantity: (state, action) => {
      console.log(action);
      return state;
    },
  },
});

export const { addCartItem, removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
