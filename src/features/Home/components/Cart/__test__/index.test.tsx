import { Cart } from '..';
import * as cartSlice from '../../../../../redux/cartSlice';
import { fireEvent, render, screen } from '../../../../../utils/testing/reduxRender';

describe('Cart Render', () => {
  const component = <Cart />;
  const initialState = {
    cart: {
      cartList: [
        { id: 1, name: 'ítem1', price: 100, quantity: 1 },
        { id: 2, name: 'ítem2', price: 200, quantity: 4 },
      ],
    },
  };
  test('Should display Cart', () => {
    render(component);
    const CartItem = screen.getByTestId('cart-item');
    expect(CartItem).toBeInTheDocument();
    const vacio = screen.getByText('Carrito vacío');
    expect(vacio).toBeInTheDocument();
  });

  test('Should remove item from Cart', () => {
    const updateCart = jest.spyOn(cartSlice, 'updateCart');
    render(component, { initialState });
    const [buttonFirstItem, buttonSecondItem] = screen.getAllByRole('button');
    fireEvent.click(buttonFirstItem);
    expect(updateCart).toHaveBeenCalled();
    fireEvent.click(buttonSecondItem);
    expect(updateCart).toHaveBeenCalled();
  });

  test('Should clear Cart', () => {
    const resetCart = jest.spyOn(cartSlice, 'resetCart');
    const fetchItemsAsync = jest.spyOn(cartSlice, 'fetchItemsAsync');

    render(component, { initialState });
    const button = screen.getByText('Vaciar carrito');
    fireEvent.click(button);
    expect(resetCart).toHaveBeenCalled();
    expect(fetchItemsAsync).toHaveBeenCalled();
  });
});
