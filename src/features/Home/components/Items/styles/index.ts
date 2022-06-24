/* istanbul ignore file */
import styled from 'styled-components';
// import { ItemWrapperProps } from '..';

type IItemDetailProps = {
  amount: number;
};

export const ContainerStyled = styled.div`
  /* display: block; */
  background-color: white;
  min-width: 400px;
  height: fit-content;
  border-radius: 5px;
  /* overflow: hidden; */
`;

//Delete props
export const ItemWrapperStyled = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  user-select: none;
`;

export const ItemDetailStyled = styled.div<IItemDetailProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  > p {
    margin: 0;
  }

  > span {
    color: ${({ amount }) => (amount > 0 ? 'green' : 'red')};
  }
`;
