/* istanbul ignore file */
import styled from 'styled-components';

export const HomeStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  padding: 20px 0;
`;

export const HomeWrapperStyled = styled.div`
  padding: 20px;
  height: 100vh;

  > section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
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
