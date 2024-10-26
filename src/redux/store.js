import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartItemsReducer from "./slices/cartItemsSlice";
import wishListReducer from "./slices/wishListSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartItemsReducer,
    wishList: wishListReducer,
  },
});
