import { showStock } from '.';

describe('showStock function', () => {
  test('should return "Agotado" if stock is 0', () => {
    const stock = 0;
    const result = showStock(stock);
    expect(result).toBe('Agotado');
  });

  test('should return "Cantidad: 1" if stock is 1', () => {
    const stock = 1;
    const result = showStock(stock);
    expect(result).toBe('Cantidad: 1');
  });
});
