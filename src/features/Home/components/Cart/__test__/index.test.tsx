import { Cart } from '..';
import { fireEvent, render, screen, waitFor } from '../../../../../utils/testing/reduxRender';

describe('Cart Render', () => {
  const component = <Cart />;
  const initialState = {
    cart: {
      cartList: [
        { id: 1, name: 'ítem1', price: 100, quantity: 1 },
        { id: 2, name: 'ítem2', price: 200, quantity: 1 },
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
    render(component, { initialState });
    const items = screen.getByTestId('cart-items-list');
    expect(items.childElementCount).toBe(2);

    const [secondButton] = screen.getAllByRole('button');
    fireEvent.click(secondButton);
    expect(items.childElementCount).toBe(1);
  });

  test('Should clear Cart', async () => {
    render(component, { initialState });
    const button = screen.getByText('Vaciar carrito');
    fireEvent.click(button);
    await waitFor(() => {
      const itemsLits = screen.getByTestId('cart-items-list');
      expect(itemsLits.childElementCount).toBe(0);
    });
  });
});
