import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import { StylesProps } from 'types';

import { breakpoints } from 'styles/breakpoints';
import { colorChange, colorChangeOnHover } from 'styles/mixins';
import theme from 'styles/theme';

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

    @media ${breakpoints.xxxl} {
      max-width: 120rem;
      margin: 0 auto;
      box-shadow: ${theme.shadows[1]};
    }

    #app {
      height: 100vh;
      scroll-behavior: smooth;
      overflow-x: hidden;
    }

    ${({ themeType }) =>
      colorChange({
        themeType,
        changeProp: 'background',
        changeVal1: theme.palette.white,
        changeVal2: theme.palette.black,
        transitionVal: 'background'
      })}
    ${({ themeType }) =>
      colorChange({
        themeType,
        changeProp: 'color',
        changeVal1: theme.palette.black,
        changeVal2: theme.palette.white,
        transitionVal: 'color'
      })}
    transition: color 1.2s, background 0s 1.2s;

    ${({ themeType }) =>
      themeType === 'light' &&
      css`
        transition: color 1.2s, background 0s;
      `};

    svg {
      ${({ themeType }) =>
        colorChange({
          themeType,
          changeProp: 'fill',
          changeVal1: theme.palette.black,
          changeVal2: theme.palette.white,
          transitionVal: 'fill'
        })}
      ${({ themeType }) =>
        colorChange({
          themeType,
          changeProp: 'stroke',
          changeVal1: theme.palette.black,
          changeVal2: theme.palette.white,
          transitionVal: 'stroke'
        })}
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
    ${({ themeType }) =>
      colorChange({
        themeType,
        changeProp: 'color',
        changeVal1: theme.palette.black,
        changeVal2: theme.palette.white,
        transitionVal: 'color'
      })};
    text-decoration: none;
  }

  a:hover {
    ${colorChangeOnHover({ changeProp: 'color', transitionVal: 'color' })}
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
  }

  /* Custom scrollbar for Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${theme.palette.primary.light} ${({ themeType }) =>
  themeType === 'light'
    ? theme.palette.componentBackgroundLight
    : theme.palette.componentBackgroundDark};
  }

  /* Custom scrollbar for Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: ${({ themeType }) =>
      themeType === 'light'
        ? theme.palette.componentBackgroundLight
        : theme.palette.componentBackgroundDark};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.primary.light};
    border-radius: ${theme.shape.borderRadius};

    &:hover {
      background-color: ${theme.palette.primary.medium};
    }

    &:active {
      background-color: ${theme.palette.primary.dark};
    }
  }

  ::selection {
    background-color: ${theme.palette.primary.medium};
    color: ${theme.palette.black};
  }
`;

export default GlobalStyle;
