
import { renderCart } from '../components/pages/cart/renderOrder';
import { El } from '../components/shared/El';


export const Cart = () => {
  renderCart()
  return El({ element: 'div', id: 'cartContainer', innerText: 'Loading...' });
};
