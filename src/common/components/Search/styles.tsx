import styled from 'styled-components';

import theme from '../../styles/theme';

export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;

  svg {
    position: absolute;
    left: 2rem;
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 43%,
        #000 45%,
        #000 55%,
        rgba(0, 0, 0, 0) 57%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        135deg,
        transparent 0%,
        transparent 43%,
        #000 45%,
        #000 55%,
        transparent 57%,
        transparent 100%
      );
    cursor: pointer;
  }
`;

export const SearchResultList = styled.ul`
  position: absolute;
  top: 110%;
  width: 100%;
  padding: 1rem 2rem;
  background: ${theme.palette.primary.light};
  border-radius: ${theme.shape.borderRadius};

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const SearchResultItem = styled.li`
  cursor: pointer;
`;
