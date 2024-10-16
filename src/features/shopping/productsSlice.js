import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../../api/productsList";

// const initialState = {
//   products: productsList,
//   cartItems: [],
//   wishList: [],
// };

const productsSlice = createSlice({
  name: "products",
  initialState:productsList,
  reducer: {
    addProduct: (state, action) => {
      console.log(action);
      return state;
    },
    removeProduct: (state, action) => {
      console.log(action);
      return state;
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
