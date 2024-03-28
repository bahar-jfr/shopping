import axios from 'axios';
import { BASE_URL } from '../const';

export const addToCart = async (data) => {
  const response = await axios.post(`${BASE_URL}/orders`, data);
  return response;
};
