import { Button } from '../kit/button';
import { El } from '../shared/El';

export const BasketCard = (data) => {
  const removeInCartHandler = () => {
    
  };

  return El({
    element: 'div',
    className: 'flex justify-between border-2 rounded-md p-4 hover:shadow-md',
    children: [
      El({
        element: 'div',
        className: 'flex flex-col justify-between gap-4',
        children: [
          El({
            element: 'h4',
            innerText: `Name: ${data.name}`,
          }),
          El({
            element: 'span',
            innerText: `Price: ${data.price}`,
          }),
          Button({
            text: 'Remove',
            className: 'bg-red-400 text-white w-fit hover:bg-red-500',
            onClick: removeInCartHandler,
          })
        ],
      }),
      El({
        element: 'img',
        className: 'w-[100px] ',
        src: data.img,
      }),
    ],
  });
};
