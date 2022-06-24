import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getItems, IItem, updateItems } from '../../../../redux/cartSlice';
import { FilterStyled } from './styles';

const options = {
  minPrice: (a: IItem, b: IItem) => a.price - b.price,
  maxPrice: (a: IItem, b: IItem) => b.price - a.price,
};

export const Filter = () => {
  const items = useAppSelector(getItems);
  const dispatch = useAppDispatch();

  const sortItems = (value: string) => {
    if (!value) return;
    const sortedItems = [...items].sort(options[value]);

    return dispatch(updateItems(sortedItems));
  };

  return (
    <FilterStyled
      data-testid="select-filter"
      onChange={(e) => sortItems(e.target.value)}
      name="filter"
    >
      <option value="">Ordenar por...</option>
      <option value="minPrice">Menor precio</option>
      <option value="maxPrice">Mayor precio</option>
    </FilterStyled>
  );
};
