import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from '../../styles/theme';

interface GlobalStyleProps {
  theme: 'light' | 'dark';
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
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
    background: ${theme.palette.black};
    color: ${(props: GlobalStyleProps) =>
      props.theme === 'light' ? theme.palette.black : theme.palette.white};

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0%;
      width: ${(props: GlobalStyleProps) => (props.theme === 'light' ? '100%' : '0%')};
      height: 100%;
      background: ${theme.palette.white};
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
