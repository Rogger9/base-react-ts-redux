import debounce from 'lodash.debounce';
import { useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { IItem, updateItems } from '../../../../redux/cartSlice';
import { SearchStyled } from './styles';

export type ISearchProps = {
  list: IItem[];
};

export const Search = ({ list }: ISearchProps) => {
  const [itemsList] = useState<IItem[]>(list);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   setItemsList(list);
  // }, []);

  const searchItems = debounce((keyboard: string) => {
    const result = itemsList.filter((item) => item.name.includes(keyboard));
    return dispatch(updateItems(result));
  }, 300);

  return (
    <SearchStyled htmlFor="search" data-testid="search-item">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search item..."
        onChange={(e) => searchItems(e.target.value)}
        data-testid="search-item-input"
      />
    </SearchStyled>
  );
};
