import { El } from "../components/shared/El";
import { Router } from "../router";
import { Main_Route } from "../router/routes";

export const Cart = () => {
  return El({
    element: "p",
    innerText: "cart page",
    children: [
      El({
        element: "button",
        innerText: "back to home",
        eventListener: [
          {
            event: "click",
            callback: () => {
              Router().navigate(Main_Route);
            },
          },
        ],
      }),
    ],
  });
};
