import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getCart, ICartItem, IItem, updateCart, updateItems } from '../../../../redux/cartSlice';
import { ButtonStyled } from '../../styles';
import { ContainerStyled, ItemDetailStyled, ItemWrapperStyled } from './styles';

export type IItemsProps = {
  list: IItem[];
};

export const Items = ({ list }: IItemsProps) => {
  const dispatch = useAppDispatch();
  const cartList: ICartItem[] = useAppSelector(getCart);
  // const [list, setList] = useState(arr);

  // useEffect(() => {
  //   setList(arr);
  // }, [arr]);

  const onAddItemToCart = (item: IItem) => {
    const index = cartList.findIndex((m) => m.id === item.id);
    if (index === -1) {
      dispatch(updateCart([...cartList, { ...item, quantity: 1 }]));
    } else {
      const tempNewCart = cartList.map((element) =>
        element.id == item.id ? { ...element, quantity: element.quantity + 1 } : element
      );
      dispatch(updateCart(tempNewCart));
    }

    const newItems = list.map((el) => (el.id === item.id ? { ...el, stock: el.stock - 1 } : el));
    dispatch(updateItems(newItems));
  };

  const amountText = (amount: number) => (amount > 0 ? `Cantidad: ${amount}` : 'Agotado');

  if (!list.length) return <span>No hay ítems para mostrar</span>;

  return (
    <ContainerStyled data-testid="container-item">
      {list.map((item) => (
        <ItemWrapperStyled key={item.id}>
          <ItemDetailStyled amount={item.stock}>
            <p>
              {item.name} (${item.price})
            </p>
            <span>{amountText(item.stock)}</span>
          </ItemDetailStyled>
          <ButtonStyled disabled={item.stock < 1} onClick={() => onAddItemToCart(item)}>
            Añadir al carrito
          </ButtonStyled>
        </ItemWrapperStyled>
      ))}
    </ContainerStyled>
  );
};
