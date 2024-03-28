import Navigo from "navigo";
import { Products } from "../pages/products";
import { Cart } from "../pages/cart";
import { Cart_Route, Main_Route } from "./routes";

let router = new Navigo("/");

const changePage = (page) => {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page());
};

export const Router = () => {
  router
    .on(Main_Route, () => {
      changePage(Products);
    })
    .on(Cart_Route, () => {
      changePage(Cart);
    });
  return router;
};
