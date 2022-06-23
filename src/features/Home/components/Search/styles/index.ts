import styled from 'styled-components';

export const SearchStyled = styled.label`
  > input {
    height: 24px;
    width: 250px;
    border: 1px solid transparent;
    outline: none;
    border-radius: 4px;
    padding: 0 8px;

    &:focus {
      border: 1px solid #ccc;
    }
  }
`;
