import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: []
}
console.log(initialState.basket);

const basketSlice = createSlice({
  name: 'basketProducts',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const isUnique = state.basket.every(el => action.payload.id !== el.id);
      isUnique && state.basket.push(action.payload);
    },

    removeProduct: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload.id)
    },
  }
})

export const basketSelector = state => state.basketProducts

export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer