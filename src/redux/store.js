import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import cartReducer from "./features/products/cardSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    // product: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
