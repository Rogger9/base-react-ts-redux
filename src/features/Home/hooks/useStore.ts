import debounce from 'lodash.debounce';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  fetchItemsAsync,
  getCart,
  getItems,
  getItemsStatus,
  ICartItem,
  IItem,
  resetCart,
  updateCart,
  updateItems,
} from '../../../redux/cartSlice';
import { cartItems } from '../../../__mock__/cartItems';
import { filterItems } from '../utils/filterItems';
import { getSortedItems } from '../utils/getSortedItems';
import { updateQuantity } from '../utils/updateQuantity';
import { updateStock } from '../utils/updateStock';

export const useStore = () => {
  const status = useAppSelector(getItemsStatus);
  const itemList = useAppSelector(getItems);
  const cartList = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const getItemsList = () => dispatch(fetchItemsAsync());

  const onDeleteItem = (item: ICartItem) => {
    if (item.quantity > 1) {
      dispatch(updateCart(updateQuantity({ cartList, item, operation: 'remove' })));
    } else {
      dispatch(updateCart(cartList.filter((i) => i.id !== item.id)));
    }

    const newItems = updateStock({ itemList, item, operation: 'add' });
    dispatch(updateItems(newItems));
  };

  const clearCart = () => {
    dispatch(resetCart());
    dispatch(fetchItemsAsync());
  };

  const sortItems = (value: string) => {
    if (!value) return;
    const sortedItems = getSortedItems({ items: [...itemList], sortBy: value });
    return dispatch(updateItems(sortedItems));
  };

  const onAddItemToCart = (item: IItem) => {
    const hasCurrentItem = cartList?.find((m) => m.id === item.id);

    if (hasCurrentItem) {
      const newCart = updateQuantity({ cartList, item, operation: 'add' });
      dispatch(updateCart(newCart));
    } else {
      const newCart = [...cartList, { ...item, quantity: 1 }];
      dispatch(updateCart(newCart));
    }

    const newItems = updateStock({ itemList, item, operation: 'remove' });
    dispatch(updateItems(newItems));
  };

  const searchItems = debounce((keyboard: string) => {
    const result = filterItems(cartItems, keyboard);
    dispatch(updateItems(result));
  }, 300);

  return {
    status,
    itemList,
    cartList,
    getItemsList,
    onDeleteItem,
    clearCart,
    sortItems,
    onAddItemToCart,
    searchItems,
  };
};
