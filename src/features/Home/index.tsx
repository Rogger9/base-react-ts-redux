import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchItemsAsync, getItems, getItemsStatus } from '../../redux/cartSlice';
import { Cart } from './components/Cart';
import { Items } from './components/Items';
import { Search } from './components/Search';
import { HomeStyled, HomeWrapperStyled } from './styles';

const Loading = () => (
  <div data-testid="el_loading">
    <p>Loading...</p>
  </div>
);

const Home = () => {
  const dispatch = useAppDispatch();
  const itemList = useAppSelector(getItems);
  const status = useAppSelector(getItemsStatus);

  useEffect(() => {
    dispatch(fetchItemsAsync());
  }, []);

  return (
    <>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <HomeWrapperStyled>
          <h1>Tienda</h1>
          <section>
            <Search />
          </section>
          <HomeStyled>
            <Items list={itemList} />
            <Cart data-testid="cart-component" />
          </HomeStyled>
        </HomeWrapperStyled>
      )}
    </>
  );
};

export default Home;
