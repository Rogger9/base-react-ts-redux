import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  fetchItemsAsync,
  getCart,
  getItems,
  ICartItem,
  updateCart,
  updateItems,
} from '../../../../redux/cartSlice';
import { ButtonStyled } from '../../styles';
import { CartItemStyled, CartItemWrapperStyled, CartWrapperStyled, DeleteIcon } from './styles';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCart);
  const itemsList = useAppSelector(getItems);

  const getTotal = (list) => {
    const total = list.reduce((current, next) => current + next.price * next.quantity, 0);
    return total;
  };

  const onDeleteItem = (item: ICartItem) => {
    const tempNewCart: ICartItem[] = [];
    cartItems.forEach((i) => {
      if (i.id === item.id) {
        i.quantity !== 1 && tempNewCart.push({ ...i, quantity: i.quantity - 1 });
      } else {
        tempNewCart.push(i);
      }
    });

    const newItems = itemsList?.map((el) =>
      el.id === item.id ? { ...el, stock: el.stock + 1 } : el
    );

    dispatch(updateCart(tempNewCart));
    dispatch(updateItems(newItems));
  };

  const clearCart = () => {
    dispatch(updateCart([]));
    dispatch(fetchItemsAsync());
  };

  return (
    <CartWrapperStyled data-testid="cart-item">
      {!cartItems.length && <span>Carrito vacío</span>}
      <div data-testid="cart-items-list">
        {cartItems.map((item) => (
          <CartItemWrapperStyled key={item.id}>
            <CartItemStyled>
              <p>
                {item.name} x {item.quantity} = {item.quantity * item.price}
              </p>
              <DeleteIcon onClick={() => onDeleteItem(item)}>🗑</DeleteIcon>
            </CartItemStyled>
          </CartItemWrapperStyled>
        ))}
      </div>
      <p>_______________________________</p>
      <p>
        <span>Total: </span>
        <b>{getTotal(cartItems)}</b>
      </p>
      {cartItems.length > 0 && <ButtonStyled onClick={clearCart}>Vaciar carrito</ButtonStyled>}
    </CartWrapperStyled>
  );
};
