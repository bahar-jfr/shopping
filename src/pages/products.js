import { getProducts } from '../api/getData';
import { Card } from '../components/card';
import { Button } from '../components/kit/button';
import { El } from '../components/shared/El';
import { Router } from '../router';
import { Cart_Route } from '../router/routes';
// console.log(data);

const data = await getProducts();
export const Products = () => {
  const navigateToCartHandler = () => {
    Router().navigate(Cart_Route);
  };

  return El({
    element: 'div',
    className: 'p-4',
    children: [
      El({
        element: 'div',
        className: 'grid grid-cols-3 gap-6 ',
        children: data.map((item) => Card(item)),
      }),
      Button({
        text: 'Cart',
        className: 'bg-green-500 w-24',
        onClick: navigateToCartHandler,
      }),
    ],
  });
};
