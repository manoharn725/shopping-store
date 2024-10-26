import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:'wishList',
    initialState: [],
    reducer: {
        addWish: (state,action) => {
            console.log(action);
            return state;
        },
        removeWish: (state,action) => {
            console.log(action);
            return state
        }
    }
})

export const {addWish, removeWish} = wishListSlice.actions;

export default wishListSlice.reducer;