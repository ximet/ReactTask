import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from 'styles/theme';
import { colorChange, colorChangeOnHover } from 'styles/mixins';

import { StylesProps } from 'types';

const GlobalStyle = createGlobalStyle<StylesProps>`
  ${normalize}
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    min-height: 100vh;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;

    ${props =>
      colorChange(props, 'background', theme.palette.white, theme.palette.black, 'background')}
    ${props => colorChange(props, 'color', theme.palette.black, theme.palette.white, 'color')}
    transition: color 1.2s, background 0s 1.2s;

    ${({ themeType }) =>
      themeType === 'light' &&
      css`
        transition: color 1.2s, background 0s;
      `};

    svg {
      ${props => colorChange(props, 'fill', theme.palette.black, theme.palette.white, 'fill')}
      ${props => colorChange(props, 'stroke', theme.palette.black, theme.palette.white, 'stroke')}
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0%;
      width: ${({ themeType }) => (themeType === 'light' ? '0%' : '100%')};
      height: 100%;
      background: ${theme.palette.black};
      transition: all 1s;
      will-change: width;
      z-index: -1;
    }
  }

  a,
  a:link,
  a:visited,
  a:active {
    ${props => colorChange(props, 'color', theme.palette.black, theme.palette.white, 'color')};
    text-decoration: none;
  }

  a:hover {
    ${colorChangeOnHover('color', 'color')}
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    outline: none;
  }
`;

export default GlobalStyle;
