import styled from 'styled-components';

import theme from 'styles/theme';

import { StylesProps } from 'types';

export const Search = styled.div<StylesProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  margin: 0 1rem;

  svg {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translate(0, -50%);
  }

  input {
    padding: 0 2rem 0 4.25rem;
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

export const SearchResultWrapper = styled.div`
  position: absolute;
  top: 110%;
  width: 100%;
  background: ${theme.palette.primary.light};
  border-radius: ${theme.shape.borderRadius};
  box-shadow: ${theme.shadows[0]};
  overflow: hidden;
  z-index: 100;
`;

export const SearchResultList = styled.ul`
  padding: 1rem 2rem;
  max-height: 360px;
  overflow-y: scroll;

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  a,
  a:link,
  a:visited,
  a:active {
    color: ${theme.palette.black};

    &:hover {
      color: ${theme.palette.grey.dark};
    }
  }

  span {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: ${theme.palette.grey.dark};
    user-select: none;
  }
`;

export const SearchResultItem = styled.li`
  cursor: pointer;
`;
