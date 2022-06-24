import debounce from 'lodash.debounce';
import { useAppDispatch } from '../../../../app/hooks';
import { updateItems } from '../../../../redux/cartSlice';
import { cartItems } from '../../../../__mock__/cartItems';
import { SearchStyled } from './styles';

export const Search = () => {
  // const [itemsList] = useState<IItem[]>(list);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   setItemsList(list);
  // }, []);

  const searchItems = debounce((keyboard: string) => {
    // if (!keyboard) {
    //   //Clear cart
    // }
    const result = cartItems.filter((item) => item.name.includes(keyboard));
    dispatch(updateItems(result));
  }, 300);

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
