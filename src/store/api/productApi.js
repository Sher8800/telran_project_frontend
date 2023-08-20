import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../config/api'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: () => 'products/all',
    }),

    getCategories: builder.query({
      query: () => 'categories/all',
    }),

    getProductsInCategories: builder.query({
      query: (id) => `categories/${id}`,
    }),

    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),

    getDiscount: builder.mutation({
      query: (body) => ({
        url: 'sale/send',
        method: 'POST',
        body,
      }),
    }),

  }),
})
export const { useGetAllProductsQuery, useGetDiscountMutation, useGetCategoriesQuery, useGetProductQuery, useGetProductsInCategoriesQuery } = productApi