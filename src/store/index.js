import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/BasketSlices";
import productsSlice from "./slices/ProductsSlices";

const store = configureStore({
  reducer: {
    basketProducts: basketSlice,
    products: productsSlice
  }
})

export default store;