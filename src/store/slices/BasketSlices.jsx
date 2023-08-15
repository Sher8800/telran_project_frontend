import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: []
}

const basketSlice = createSlice({
  name: 'basketProducts',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.basket.push(action.payload)
    },

    removeProduct: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload)
    },
  }
})

export const basketSelector = state => state.basketProducts


export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer