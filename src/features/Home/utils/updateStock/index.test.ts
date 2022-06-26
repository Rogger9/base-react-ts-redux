import { updateStock } from '.';
import { cartItems } from '../../../../__mock__/cartItems';

describe('updateStock function', () => {
  test('should remove one item', () => {
    const [item] = cartItems;
    const [expected] = updateStock({ itemList: cartItems, item, operation: 'remove' });
    const result = item.stock - 1;
    expect(expected.stock).toBe(result);
  });

  test('should add one item', () => {
    const [item] = cartItems;
    const [expected] = updateStock({ itemList: cartItems, item, operation: 'add' });
    const result = item.stock + 1;
    expect(expected.stock).toBe(result);
  });
});
