import { useEffect } from 'react';
import { Cart } from './components/Cart';
import { Filter } from './components/Filter';
import { Items } from './components/Items';
import { Search } from './components/Search';
import { useStore } from './hooks/useStore';
import { HomeStyled, HomeWrapperStyled } from './styles';

const Loading = () => (
  <div data-testid="el_loading">
    <p>Loading...</p>
  </div>
);

const Home = () => {
  const { itemList, status, getItemsList } = useStore();

  useEffect(() => {
    getItemsList();
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
            <Filter />
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
