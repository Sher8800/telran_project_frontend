import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: []
}

const basketSlice = createSlice({
  name: 'basketProducts',
  initialState: initialState,
  reducers: {

    addProduct: (state, action) => {
      const isUnique = state.basket.every(el => action.payload.id !== el.id);
      isUnique && state.basket.push({ ...action.payload, count: 1 });
    },

    removeProduct: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload.id)
    },

    incrementProduct: (state, action) => {
      state.basket = state.basket.map((el) => {
        if (action.payload === el.id) {
          return ({
            ...el,
            count: el.count + 1
          })
        }
        return el
      })
    },

    decrementProduct: (state, action) => {
      state.basket = state.basket.map((el) => {
        if (action.payload === el.id && el.count > 1) {
          return ({ ...el, count: el.count - 1 })
        }
        return el
      })
    },

  }
})

export const basketSelector = state => state.basketProducts

export const { addProduct, removeProduct, incrementProduct, decrementProduct } = basketSlice.actions;

export default basketSlice.reducer