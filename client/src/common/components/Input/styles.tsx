import styled from 'styled-components';

import theme from '../../styles/theme';
import { colorChange } from '../../styles/mixins';

import { StylesProps } from '../../../types';

export const Input = styled.input<StylesProps>`
  width: 100%;
  height: 3rem;
  padding: 0 2rem 0 4.25rem;
  border: none;
  border-radius: ${theme.shape.borderRadius};
  ${(props: StylesProps) =>
    colorChange(
      props,
      'background',
      theme.palette.componentBackgroundLight,
      theme.palette.componentBackgroundDark,
      'all'
    )}
  ${(props: StylesProps) =>
    colorChange(props, 'color', theme.palette.black, theme.palette.white, 'all')}

  &:focus {
    outline: none;
  }
`;
