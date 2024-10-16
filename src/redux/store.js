import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/shopping/productsSlice";
import cartItemsReducer from "../features/shopping/cartItemsSlice";
import wishListReducer from "../features/shopping/wishListSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartItemsReducer,
    wishList: wishListReducer,
  },
});
