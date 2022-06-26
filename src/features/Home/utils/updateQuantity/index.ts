import { ICartItem, IItem } from '../../../../redux/cartSlice';

type UpdateQuantity = {
  cartList: ICartItem[];
  item: ICartItem | IItem;
  operation: 'add' | 'remove';
};

export const updateQuantity = ({ cartList, item, operation }: UpdateQuantity) => {
  return cartList?.map((el) => {
    if (el.id !== item.id) return el;

    if (operation === 'add') {
      return { ...el, quantity: el.quantity + 1 };
    } else {
      return { ...el, quantity: el.quantity - 1 };
    }
  });
};
