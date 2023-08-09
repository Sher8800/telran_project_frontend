import { API_URL } from "../globalVariables/GlobalVariables";
import { useLocation } from "react-router";

// const location = useLocation()
// const { state } = location;

export const ProductService = {
  async getProducts() {
    const response = await fetch(`${API_URL}products/all`);
    return await response.json()
  },
  async getCategories() {
    const response = await fetch(`${API_URL}categories/all`);
    return await response.json()
  },
  async getProduct() {
    // const response = await fetch(`${API_URL}products/${state.id}`);
    // return await response.json()
  }
}

