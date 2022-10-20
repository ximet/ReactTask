import styled from 'styled-components';

import theme from 'styles/theme';
import { colorChange } from 'styles/mixins';

import { StylesProps } from 'types';

export const Header = styled.header<StylesProps>`
  position: relative;
  padding: 1.5rem 0;
  z-index: 2;

  svg {
    width: 2rem;
  }
`;

export const HeaderAction = styled.div<StylesProps>`
  button:first-of-type {
    margin-right: 2rem;
  }
`;

export const HeaderMenuButton = styled.button<StylesProps>`
  cursor: pointer;

  svg {
    ${({ themeType }: StylesProps) =>
      colorChange({
        themeType,
        changeProp: 'fill',
        changeVal1: theme.palette.black,
        changeVal2: theme.palette.white,
        transitionVal: 'fill'
      })}
  }
`;
