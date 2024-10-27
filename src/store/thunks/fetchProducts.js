import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/get", async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    return result;
  });


  