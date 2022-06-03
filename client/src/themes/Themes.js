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
