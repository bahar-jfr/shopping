import { Button } from "../kit/button";
import { El } from "../shared/El";

export const Card = (data) => {
  return El({
    element: "div",
    className: "flex justify-between items-center border-2 rounded-md p-4",
    children: [
      El({
        element: "div",
        className: "flex flex-col  gap-4",
        children: [
          El({
            element: "h4",
            innerText: `Name: ${data.name}`,
          }),
          El({
            element: "span",
            innerText: `Price: ${data.price}`,
          }),
          Button({
            text: "Add to cart",
            className: "bg-blue-300 text-gray-600 w-fit",
          }),
        ],
      }),
      El({
        element: "img",
        className: "w-[100px] ",
        src: data.img,
      }),
    ],
  });
};
