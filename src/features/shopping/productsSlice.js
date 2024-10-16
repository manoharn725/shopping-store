import { createSlice } from "@reduxjs/toolkit";
import { productsListApi } from "../../api/productsListApi";

const productsSlice = createSlice({
  name: "products",
  initialState: productsListApi,
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
