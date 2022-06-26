import { useStore } from '../../hooks/useStore';
import { FilterStyled } from './styles';

export const Filter = () => {
  const { sortItems } = useStore();

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
