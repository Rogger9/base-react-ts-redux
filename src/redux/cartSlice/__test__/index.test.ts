import {
  fetchItemsAsync,
  getCart,
  getItems,
  getItemsStatus,
  resetCart,
  updateCart,
  updateItems,
} from '..';
import { fetchItems as fetched } from '../../../api/fetchItems';
import { store } from '../../../app/store';
import { waitFor } from '../../../utils/testing/reduxRender';
import { cartItems } from '../../../__mock__/cartItems';

jest.mock('../../../api/fetchItems');
const fetchItems = fetched as jest.MockedFunction<typeof fetched>;

describe('Cart Reducer', () => {
  test('Should call fetchItemAsync Success', async () => {
    fetchItems.mockResolvedValue(cartItems);
    await waitFor(() => {
      store.dispatch(fetchItemsAsync());
      const loading = getItemsStatus(store.getState());
      expect(loading).toEqual('loading');
    });
    const status = getItemsStatus(store.getState());
    expect(status).toEqual('idle');
  });

  test('Should call fetchItemAsync Failed', async () => {
    fetchItems.mockRejectedValue('Error');
    await store.dispatch(fetchItemsAsync());
    const status = getItemsStatus(store.getState());
    expect(status).toEqual('failed');
  });

  test('getItems function should get an empty Array', () => {
    const items = getItems(store.getState());
    expect(items).toHaveLength(0);
  });

  test('getcart function should get an empty Array', () => {
    const cartList = getCart(store.getState());
    expect(cartList).toHaveLength(0);
  });

  test('updateCart function should add an Item to Cart', async () => {
    const firstItem = [{ id: 1, name: 'item1', price: 100, quantity: 1, stock: 2 }];
    store.dispatch(updateCart(firstItem));
    expect(getCart(store.getState())).toHaveLength(1);
  });

  test('updateItems function on success', () => {
    const filteredItems = [{ id: 1, name: 'item1', price: 100, stock: 4 }];
    store.dispatch(updateItems(filteredItems));
    const items = getItems(store.getState());
    expect(items).toHaveLength(filteredItems.length);
  });

  test('resetCart function should reset the cart', () => {
    const firstItem = [{ id: 1, name: 'item1', price: 100, quantity: 1, stock: 2 }];
    store.dispatch(updateCart(firstItem));
    expect(getCart(store.getState())).toHaveLength(1);
    store.dispatch(resetCart());
    expect(getCart(store.getState())).toHaveLength(0);
  });
});
