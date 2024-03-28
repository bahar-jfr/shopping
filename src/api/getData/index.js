import axios from 'axios';
import { BASE_URL } from '../const';

// export const getProducts = async () => {
//   const response = await fetch(`${BASE_URL}/products`);
//   const data = await response.json()
//   return data;
// };

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(`${BASE_URL}/orders`);
  return response.data;
};
