import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/BasketSlices";
import productsSlice from "./slices/ProductsSlices";
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { productApi } from "./api/productApi";



const rootReducer = combineReducers({
  basketProducts: basketSlice,
  products: productsSlice,
  [productApi.reducerPath]: productApi.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
})

export const persistor = persistStore(store)

export default store;