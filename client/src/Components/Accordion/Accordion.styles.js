import styled from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('theme', {
  light: '#b3ecff',
  dark: '#243145'
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fff'
});

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  transition: all 0.5s linear;
`;

export const Container = styled.div`
  position: absolute;
  top: 30%;
  transition: all 0.5s linear;
  width: 50%;
`;

export const Wrap = styled.div`
  transition: all 0.5s linear;
  background: ${backgroundColor};
  color: ${textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled.div`
  background: ${backgroundColor};
  color: ${textColor};
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  transition: all 0.5s linear;

  p {
    font-size: 1.5rem;
  }
`;
