import axios from "axios";
import { BASE_URL } from "../const";

// export const getProducts = async () => {
//   const response = await fetch(`${BASE_URL}/products`);
//   const data = await response.json()
//   return data;
// };

const perPage = 2;

export const getProducts = async (page = 1, findItem = "") => {
  const response = await axios.get(
    `${BASE_URL}/products?_page=${page}&_limit=${perPage}&&name_like=${findItem}`
  );
  console.log(response.headers["x-total-count"]);
  // return response.data;
  return {
    data: response.data,
    totalPage: Math.ceil(response.headers["x-total-count"] / perPage),
  };
};

export const getOrders = async () => {
  const response = await axios.get(`${BASE_URL}/orders`);
  return response.data;
};
