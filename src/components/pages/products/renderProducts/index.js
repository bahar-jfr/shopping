import { getProducts } from "../../../../api/getData";
import { Router } from "../../../../router";
import { Cart_Route } from "../../../../router/routes";
import { Card } from "../../../card";
import { Button } from "../../../kit/button";
import { El } from "../../../shared/El";

export const renderProducts = (page, searchItem = "") => {
  getProducts(page, searchItem)
    .then((data) => {
      const container = document.querySelector("#productContainer");
      container.innerHTML = "";
      const productDiv = El({
        element: "div",
        className: "p-4",
        children: [
          El({
            element: "div",
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ",
            children: data.data.map((item) => Card(item)),
          }),
        ],
      });
      container.appendChild(productDiv);
    })
    .catch(() => {
      const container = document.querySelector("#productContainer");
      container.innerHTML = "something went wrong";
    });
};
