import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.find((product) => product._id == action.payload._id);

      state.products.push({ ...action.payload });
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
