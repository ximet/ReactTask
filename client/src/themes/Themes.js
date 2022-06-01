// export const lightTheme = {
//   body: '#FFF',
//   text: '#363537',
//   toggleBorder: '#FFF',
//   background: '#363537'
// };

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   background: '#999'
// };

import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#2d2d2d'
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fff'
});

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${backgroundColor};
    color: ${textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
