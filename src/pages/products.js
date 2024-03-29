import { getProducts } from "../api/getData";
import { Card } from "../components/card";
import { Button } from "../components/kit/button";
import { renderProducts } from "../components/pages/products/renderProducts";
import { El } from "../components/shared/El";
import { Router } from "../router";
import { Cart_Route } from "../router/routes";
import { debounce } from "../utils";
// console.log(data);

let currentPage = 1;
const totalPage = await getProducts();

export const Products = () => {
  const navigateToCartHandler = () => {
    Router().navigate(Cart_Route);
  };

  const searchProduct = (event) => {
    const container = document.querySelector("#productContainer");
    container.innerHTML = "loading...";
    currentPage = 1;
    document.getElementById("page").innerHTML = currentPage;
    debounce(() => renderProducts(currentPage, event.target.value), 1000);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    document.getElementById("page").innerHTML = --currentPage;
    const container = document.querySelector("#productContainer");
    container.innerHTML = "loading...";
    renderProducts(currentPage);
  };
  const nextPage = () => {
    if (currentPage >= totalPage.totalPage) return;

    document.getElementById("page").innerHTML = ++currentPage;
    const container = document.querySelector("#productContainer");
    container.innerHTML = "loading...";
    renderProducts(currentPage);
  };

  renderProducts(currentPage);
  return El({
    element: "div",
    children: [
      El({
        element: "input",
        className: "border p-2",
        placeholder: "search",
        onkeyup: searchProduct,
        id: "input",
      }),

      El({
        element: "div",
        innerText: "Loading...",
        id: "productContainer",
      }),
      El({
        element: "div",
        className: "flex gap-2",
        children: [
          El({
            element: "span",
            innerText: "<",
            className: "cursor-pointer text-lg",
            eventListener: [
              {
                event: "click",
                callback: prevPage,
              },
            ],
          }),
          El({
            element: "span",
            innerText: currentPage,
            className: "text-lg",
            id: "page",
          }),
          El({
            element: "span",
            innerText: ">",
            className: "cursor-pointer text-lg",
            eventListener: [
              {
                event: "click",
                callback: nextPage,
              },
            ],
          }),
        ],
      }),
      Button({
        text: "Cart",
        className: "bg-green-500 w-24 mt-4 hover:bg-green-600",
        onClick: navigateToCartHandler,
      }),
    ],
  });
};
