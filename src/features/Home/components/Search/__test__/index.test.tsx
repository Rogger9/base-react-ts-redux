import { Search } from '..';
import { fireEvent, render, screen, waitFor } from '../../../../../utils/testing/reduxRender';
import { cartItems } from '../../../../../__mock__/cartItems';

describe('Search component render', () => {
  test('Should display a input', () => {
    render(<Search list={cartItems} />);
    const label = screen.getByTestId('search-item');
    expect(label).toBeInTheDocument();
  });

  test('function call', async () => {
    const DEBOUNCED_TIME = 300;
    jest.useFakeTimers();
    const mockChange = jest.fn();

    render(<Search list={cartItems} />);

    const input = screen.getByTestId('search-item-input');
    input.onchange = mockChange;

    fireEvent.change(input, { target: { value: '1' } });
    await waitFor(() => {
      expect(mockChange).toBeCalledTimes(1);
      jest.advanceTimersByTime(DEBOUNCED_TIME);
    });
  });
});
