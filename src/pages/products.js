import { El } from "../components/shared/El";
import { Router } from "../router";
import { Cart_Route } from "../router/routes";

export const Products = () => {
  return El({
    element: "p",
    innerText: "products page",
    children: [
      El({
        element: "button",
        innerText: "cart page",
        eventListener: [
          {
            event: "click",
            callback: () => {
              Router().navigate(Cart_Route);
            },
          },
        ],
      }),
    ],
  });
};
