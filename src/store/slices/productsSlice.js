import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/fetchProducts";
import { statusCode } from "../../components/utils/constants";

const initialState = {
  products: [],
  status: statusCode.IDLE,
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
        //state.status = 'loading';
        state.status = statusCode.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        //state.status = 'idle';
        state.status = statusCode.IDLE;
      })
      .addCase(fetchProducts.rejected, (state) => {
        //state.status = 'error';
        state.status = statusCode.ERROR;
      });
  },
});


export default productsSlice.reducer;


