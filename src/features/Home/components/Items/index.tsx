import { IItem } from '../../../../redux/cartSlice';
import { useStore } from '../../hooks/useStore';
import { ButtonStyled } from '../../styles';
import { showStock } from '../../utils/showStock';
import { ContainerStyled, ItemDetailStyled, ItemWrapperStyled } from './styles';

export type IItemsProps = {
  list: IItem[];
};

export const Items = ({ list }: IItemsProps) => {
  const { onAddItemToCart } = useStore();

  if (!list.length) return <span>No hay ítems para mostrar</span>;

  return (
    <ContainerStyled data-testid="container-item">
      {list.map((item) => (
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
