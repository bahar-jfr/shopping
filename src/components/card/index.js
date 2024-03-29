import { addToCart } from '../../api/setData';
import { Button } from '../kit/button';
import { El } from '../shared/El';

export const Card = (data) => {
  const addToCartHandler = () => {
    addToCart({
      name: data.name,
      price: data.price,
      img: data.img,
    });
  };

  return El({
    element: 'div',
    className: 'flex justify-between items-center border-2 rounded-md p-4 hover:shadow-md',
    children: [
      El({
        element: 'div',
        className: 'flex flex-col justify-between gap-4 ',
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
            text: 'Add to cart',
            className: 'bg-blue-300 hover:bg-blue-400 text-gray-600 w-fit',
            onClick: addToCartHandler,
          }),
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
