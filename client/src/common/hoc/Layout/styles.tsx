import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from '../../styles/theme';
import { colorChange } from '../../styles/mixins';

import { StylesProps } from '../../../types';

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
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
    background: ${theme.palette.white};
    ${(props: StylesProps) =>
      colorChange(props, 'color', theme.palette.black, theme.palette.white, 'color')}

    svg {
      ${(props: StylesProps) =>
        colorChange(props, 'fill', theme.palette.black, theme.palette.white, 'fill')}
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0%;
      width: ${(props: StylesProps) => (props.theme === 'light' ? '0%' : '100%')};
      height: 100%;
      background: ${theme.palette.black};
      transition: all 1s;
      will-change: width;
      z-index: -1;
    }
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
