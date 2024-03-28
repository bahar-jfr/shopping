import { getOrders } from '../api/getData';
import { BasketCard } from '../components/basketCard';
import { Button } from '../components/kit/button';
import { El } from '../components/shared/El';
import { Router } from '../router';
import { Main_Route } from '../router/routes';

export const Cart = () => {
  getOrders()
    .then((data) => {
      renderCart(data);
    })
    .catch(() => {
      const container = document.querySelector('#cartContainer');
      container.innerHTML = 'something went wrong';
    });

  const renderCart = (data) => {
    const container = document.querySelector('#cartContainer');
    container.innerHTML = '';

    const cartDiv = El({
      element: 'div',
      className: 'p-4',
      children: [
        El({
          element: 'div',
          className: 'grid grid-cols-3 gap-6 ',
          children: data.map((item) => BasketCard(item)),
        }),
        Button({
          text: 'Home',
          className: 'bg-green-500 w-24',
          onClick: navigateToHomeHandler,
        }),
      ],
    });

    container.appendChild(cartDiv);
  };

  const navigateToHomeHandler = () => {
    Router().navigate(Main_Route);
  };

  return El({ element: 'div', id: 'cartContainer', innerText: 'Loading...' });
};
