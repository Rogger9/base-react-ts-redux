import { useStore } from '../../hooks/useStore';
import { SearchStyled } from './styles';

export const Search = () => {
  const { searchItems } = useStore();

  return (
    <SearchStyled htmlFor="search" data-testid="search-item">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Buscar item..."
        onChange={(e) => searchItems(e.target.value)}
        data-testid="search-item-input"
      />
    </SearchStyled>
  );
};
