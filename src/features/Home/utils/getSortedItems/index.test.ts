import { getSortedItems } from '.';
import { cartItems } from '../../../../__mock__/cartItems';

describe('function getSortedItems', () => {
  test('minPrice sort', () => {
    const sortBy = 'minPrice';
    const itemsList = getSortedItems({ items: cartItems, sortBy });
    expect(itemsList).toEqual(cartItems.sort((a, b) => a.price - b.price));
  });

  test('maxPrice sort', () => {
    const sortBy = 'maxPrice';
    const itemsList = getSortedItems({ items: cartItems, sortBy });
    expect(itemsList).toEqual(cartItems.sort((a, b) => b.price - a.price));
  });

  test('default sort', () => {
    const sortBy = 'default';
    const itemsList = getSortedItems({ items: cartItems, sortBy });
    expect(itemsList).toEqual(cartItems);
  });
});
