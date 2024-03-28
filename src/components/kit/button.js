import { El } from "../shared/El";

export const Button = (btn) => {
  console.log(btn);
  return El({
    element: "button",
    innerText: btn.text,
    className: `rounded-md p-2 px-4  ${btn.className}`,
    eventListener: [
      {
        event: "click",
        callback: btn.onClick,
      },
    ],
  });
};
