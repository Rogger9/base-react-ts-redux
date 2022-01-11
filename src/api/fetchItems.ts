/* istanbul ignore file */
import { IItem } from '../redux/cartSlice';
import { cartItems } from '../__mock__/cartItems';

const delay = 1000;

export const fetchItems = () => {
  return new Promise<IItem[]>((resolve) => {
    setTimeout(() => {
      resolve(cartItems);
    }, delay);
  });
};
