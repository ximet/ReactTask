import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
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
    font-size: 62.5%;
  }
  
  body {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
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
