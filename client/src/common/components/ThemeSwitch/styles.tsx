import styled from 'styled-components';

import theme from '../../styles/theme';
import { colorChange } from '../../styles/mixins';

import { StylesProps } from '../../../types';

export const ThemeSwitch = styled.div<StylesProps>`
  position: relative;
  width: 100px;
  height: 3rem;
  padding: 0 2rem;
  border-radius: ${theme.shape.borderRadius};
  ${(props: StylesProps) =>
    colorChange(
      props,
      'background',
      theme.palette.componentBackgroundLight,
      theme.palette.componentBackgroundDark,
      'background'
    )}
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: ${(props: StylesProps) => (props.theme === 'light' ? '0' : '50%')};
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
