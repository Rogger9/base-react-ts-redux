import { updateQuantity } from '.';
import { cartItems } from '../../../../__mock__/cartItems';

describe('updateQuantity function', () => {
  test('should remove one unit', () => {
    const cartList = [{ ...cartItems[0], quantity: 2 }];
    const [item] = cartItems;
    const [expected] = updateQuantity({ cartList, item, operation: 'remove' });
    expect(expected).toEqual({ ...item, quantity: 1 });
  });

  test('should add one unit', () => {
    const cartList = [{ ...cartItems[0], quantity: 2 }];
    const [item] = cartItems;
    const [expected] = updateQuantity({ cartList, item, operation: 'add' });
    expect(expected).toEqual({ ...item, quantity: 3 });
  });

  test('should not change quantity ', () => {
    const cartList = [
      { ...cartItems[0], quantity: 2 },
      { ...cartItems[1], quantity: 1 },
    ];
    const [item1, item2] = cartItems;
    const [, expected2] = updateQuantity({ cartList, item: item1, operation: 'add' });
    expect(expected2).toEqual({ ...item2, quantity: 1 });
  });
});
