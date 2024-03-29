import { getOrders } from "../../../../api/getData";
import { Router } from "../../../../router";
import { Main_Route } from "../../../../router/routes";
import { BasketCard } from "../../../basketCard";
import { Button } from "../../../kit/button";
import { El } from "../../../shared/El";

const renderOrder = (data) => {
  const navigateToHomeHandler = () => {
    Router().navigate(Main_Route);
  };
  const container = document.querySelector("#cartContainer");
  container.innerHTML = "";

  const cartDiv = El({
    element: "div",
    className: "p-4",
    children: [
      El({
        element: "div",
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ",
        children: data.map((item) => BasketCard(item)),
      }),
      Button({
        text: "Home",
        className: "bg-green-500 w-24 mt-4 hover:bg-green-600",
        onClick: navigateToHomeHandler,
      }),
    ],
  });

  container.appendChild(cartDiv);
};
export const renderCart = () => {
  getOrders()
    .then((data) => {
      renderOrder(data);
    })
    .catch(() => {
      const container = document.querySelector("#cartContainer");
      container.innerHTML = "something went wrong";
    });
};
