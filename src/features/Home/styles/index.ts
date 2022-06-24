/* istanbul ignore file */
import styled from 'styled-components';

export const HomeStyled = styled.div`
  /* display: inline-flex; */
  /* height: 100vw; */
  /* flex: 1; */
  width: 100%;
  /* justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  padding: 20px 0;
`;

export const HomeWrapperStyled = styled.div`
  padding: 20px;
  height: 100vh;

  > section {
    color: white;
    padding: 10px 0;
  }
`;

export const ButtonStyled = styled.button`
  background: #09f;
  padding: 6px 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }
`;
