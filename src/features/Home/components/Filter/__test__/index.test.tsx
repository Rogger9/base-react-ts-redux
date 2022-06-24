import { Filter } from '..';
import { fireEvent, render, screen } from '../../../../../utils/testing/reduxRender';

describe('Filter component', () => {
  const mockFn = jest.fn();
  test('render', () => {
    render(<Filter />);
    const select = screen.getByTestId('select-filter');
    expect(select).toBeInTheDocument();
  });

  test('function call', () => {
    render(<Filter />);
    const select = screen.getByTestId('select-filter');
    select.onchange = mockFn;
    fireEvent.change(select, { target: { value: 'minPrice' } });
    expect(mockFn).toHaveBeenCalled();
  });

  test('should not execute the function dispatch', () => {
    render(<Filter />);
    const select = screen.getByTestId('select-filter');
    fireEvent.change(select, { target: { value: '' } });
    const text = screen.getByText('Ordenar por...');
    expect(text).toBeInTheDocument();
  });
});
