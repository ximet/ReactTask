import styled, { createGlobalStyle } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
${({ theme }) => `
  * {
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.fontColor};
  }

  html {
    min-height: ${theme.height.default};
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    outline: none;
    height: ${theme.height.default};
  }
  
  #app {
    height: inherit;
  }
`}
`;

export const Button = styled.button`
  ${({ theme }) => `
    padding: ${theme.padding.default};
    margin-left: ${theme.margin.default};
    border-radius: ${theme.borderRadius.default};
    border: none;

    &:hover {
      background-color: ${theme.colors.primaryColorDarker};
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  `}
`;

export const Input = styled.input`
  ${({ search, theme }) =>
    search &&
    `
      padding: ${theme.padding.default};
      padding-left: ${theme.padding.big};
      border-radius: ${theme.borderRadius.default};
      border: none;

      background-color: ${theme.colors.primaryColor};
      background-image: ${theme.backgroundImage.image};
      background-repeat: no-repeat;
      background-size: ${theme.backgroundImage.size};
      background-position: ${theme.backgroundImage.position};

      width: inherit;

      &::placeholder {
        color: ${theme.colors.fontColor}
      }

      &:focus {
        outline: none;
      }
  `}
`;

export const Navigation = styled.nav`
  list-style: none;
  display: flex;
`;

export const Link = styled(RouterLink)`
  ${({ theme }) => `
    text-decoration: none;
    color: ${theme.colors.fontColor};
    margin: ${theme.margin.default};

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const Item = styled.a`
  ${({ theme }) => `
    padding: ${theme.padding.xs};
    width: inherit;

    &:hover {
      background-color: ${theme.colors.primaryColorDarker};
      cursor: pointer;
    }

    &:focus {
      outline: inherit;
    }`}
`;

export const List = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;

    padding-left: ${theme.padding.s};
    position: absolute;
    text-align: left;

    box-shadow: $box-shadow-light;
    background-color: ${theme.colors.primaryColor}
    border-radius: ${theme.borderRadius.default};
    margin-top: 0;
    width: ${theme.width.s};
    z-index: 10;

    display: none;
    overflow: hidden;

    ${Dropdown}:hover & {
      display: flex;
    }

    ${Item}:hover & {
      display: flex;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => `
    max-width: ${theme.width.s};
    box-shadow: $box-shadow-light;
    margin: ${theme.margin.default};
    border-radius: ${theme.borderRadius.default};
    text-align: left;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ row }) =>
    row &&
    `
      flex-direction: row;
    `}

  ${({ column }) =>
    column &&
    `
      flex-direction: column;
    `}
`;
