import styled from 'styled-components';

import theme from '../../styles/theme';

export const ThemeSwitch = styled.div`
  position: relative;
  height: 3rem;
  padding: 0 2rem;
  border-radius: ${theme.shape.borderRadius};
  background: ${theme.palette.componentBackgroundLight};
  width: 100px;
  transition: all 1.2s;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: ${theme.palette.primary.light};
    border-radius: ${theme.shape.borderRadius};
    box-shadow: ${theme.shadows[0]};
    transition: 0.8s ${theme.transitions[0]};
  }

  svg {
    position: absolute;
    top: 50%;
    width: 2rem;
    height: 2rem;
    transform: translate(0, -50%);
  }

  svg:first-of-type {
    left: 0.57rem;
  }

  svg:last-of-type {
    right: 0.57rem;
  }
`;
