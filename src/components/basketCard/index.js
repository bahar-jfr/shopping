import { El } from '../shared/El';

export const BasketCard = (data) => {
  return El({
    element: 'div',
    className: 'flex justify-between items-center border-2 rounded-md p-4',
    children: [
      El({
        element: 'div',
        className: 'flex flex-col  gap-4',
        children: [
          El({
            element: 'h4',
            innerText: `Name: ${data.name}`,
          }),
          El({
            element: 'span',
            innerText: `Price: ${data.price}`,
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
