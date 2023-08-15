import { API_URL } from "../config/api";

export const ProductService = {

  async getAllProducts() {
    const response = await fetch(`${API_URL}products/all`);
    return await response.json()
  },

  async getCategories() {
    const response = await fetch(`${API_URL}categories/all`);
    return await response.json()
  },

  async getProductsInCategories(id) {
    const response = await fetch(`${API_URL}categories/${id}`);
    return await response.json()
  },

  async getProduct(id) {
    const response = await fetch(`${API_URL}products/${id}`);
    return await response.json()
  }

}

