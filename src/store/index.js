import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/BasketSlices";

const store = configureStore({
  reducer: basketSlice.reducer
})

export default store;