import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {

    setProducts: (state, action) => {
      state.products = action.payload
    }

  }
})

export const productsSelector = state => state.products


export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer