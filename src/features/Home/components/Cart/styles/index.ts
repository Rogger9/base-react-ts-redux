import styled from 'styled-components';

export const CartWrapperStyled = styled.div`
  width: 400px;
  background-color: rgba(50, 50, 50, 0.2);
  padding: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  display: grid;
  place-items: center;
`;

export const CartItemStyled = styled.div`
  flex: 1;
  display: inline-flex;
  gap: 10px;
`;

export const DeleteIcon = styled.button`
  padding: 0;
  border: none;
  background-color: rgba(50, 50, 50, 0);
`;

export const CartItemWrapperStyled = styled.div`
  /* padding: 20px; */
`;
