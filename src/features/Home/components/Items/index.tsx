import { IItem } from '../../../../redux/cartSlice';
import { useStore } from '../../hooks/useStore';
import { ButtonStyled } from '../../styles';
import { filterItems } from '../../utils/filterItems';
import { showStock } from '../../utils/showStock';
import { ContainerStyled, ItemDetailStyled, ItemWrapperStyled } from './styles';

export type IItemsProps = {
  list: IItem[];
};

export const Items = ({ list }: IItemsProps) => {
  const { search, onAddItemToCart } = useStore();

  const filteredList = filterItems(list, search);

  const listToRender = search ? filteredList : list;

  if (!listToRender.length) return <span>No hay ítems para mostrar</span>;

  return (
    <ContainerStyled data-testid="container-item">
      {listToRender.map((item) => (
        <ItemWrapperStyled key={item.id}>
          <ItemDetailStyled amount={item.stock}>
            <p>
              {item.name} (${item.price})
            </p>
            <span>{showStock(item.stock)}</span>
          </ItemDetailStyled>
          <ButtonStyled disabled={item.stock < 1} onClick={() => onAddItemToCart(item)}>
            Añadir al carrito
          </ButtonStyled>
        </ItemWrapperStyled>
      ))}
    </ContainerStyled>
  );
};
