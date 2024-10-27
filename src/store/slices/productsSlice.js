import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/fetchProducts";

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //reducers to handle synchronous task
  },
  extraReducers: (builder) => {
    //extraReducers to handle asynchronous task, we can handle PROMISES 3 cases here
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export default productsSlice.reducer;
