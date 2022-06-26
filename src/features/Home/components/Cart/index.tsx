import { ICartItem } from '../../../../redux/cartSlice';
import { useStore } from '../../hooks/useStore';
import { ButtonStyled } from '../../styles';
import { CartItemStyled, CartItemWrapperStyled, CartWrapperStyled, DeleteIcon } from './styles';

const getTotal = (list: ICartItem[]) => {
  return list.reduce((current, next) => current + next.price * next.quantity, 0);
};

export const Cart = () => {
  const { cartList, onDeleteItem, clearCart } = useStore();

  return (
    <CartWrapperStyled data-testid="cart-item">
      {!cartList.length && <span>Carrito vacío</span>}
      <div data-testid="cart-items-list">
        {cartList.map((item) => (
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
        <b>{getTotal(cartList)}</b>
      </p>
      {cartList.length > 0 && <ButtonStyled onClick={clearCart}>Vaciar carrito</ButtonStyled>}
    </CartWrapperStyled>
  );
};
