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
