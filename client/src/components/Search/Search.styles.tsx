import styled from 'styled-components';

import theme from 'styles/theme';

import { StylesProps } from 'types';

export const Search = styled.div<StylesProps>`
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
    background: ${({ themeType }: StylesProps) => `linear-gradient(
        45deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 43%,
        ${themeType === 'light' ? theme.palette.black : theme.palette.white} 45%,
        ${themeType === 'light' ? theme.palette.black : theme.palette.white} 55%,
        rgba(0, 0, 0, 0) 57%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        135deg,
        transparent 0%,
        transparent 43%,
        ${themeType === 'light' ? theme.palette.black : theme.palette.white} 45%,
        ${themeType === 'light' ? theme.palette.black : theme.palette.white} 55%,
        transparent 57%,
        transparent 100%
      )`};
    cursor: pointer;
  }
`;

export const SearchResultList = styled.ul`
  position: absolute;
  top: 110%;
  width: 100%;
  max-height: 360px;
  padding: 1rem 2rem;
  background: ${theme.palette.primary.light};
  border-radius: ${theme.shape.borderRadius};
  box-shadow: ${theme.shadows[0]};
  overflow-y: scroll;
  z-index: 100;

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${theme.palette.black};

    &:hover {
      color: ${theme.palette.grey.dark};
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const SearchResultItem = styled.li`
  cursor: pointer;
`;
