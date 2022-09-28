import styled, { css } from 'styled-components';

import theme from 'styles/theme';

import { StylesProps } from 'types';

interface ButtonStylesProps extends StylesProps {
  width?: string;
  color?: string;
}

export const Button = styled.button<ButtonStylesProps>`
  width: ${({ width }) => width};
  height: 3rem;
  padding: 0 2rem;
  font-weight: 500;
  background: ${theme.palette.primary.light};
  border-radius: ${theme.shape.borderRadius};
  cursor: pointer;

  &:hover {
    background: ${theme.palette.primary.medium};
  }

  &:active {
    background: ${theme.palette.primary.dark};
  }

  ${({ color }) =>
    color === 'white' &&
    css`
      background: ${theme.palette.white};

      &:hover {
        background: ${theme.palette.grey.light};
      }

      &:active {
        background: ${theme.palette.grey.medium};
      }
    `};
`;
