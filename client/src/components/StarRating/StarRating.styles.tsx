import styled, { css } from 'styled-components';

import { StylesProps } from 'types';

import theme from 'styles/theme';
import { radioWrapperRoot } from 'styles/mixins';

export const StarRating = styled.div`
  div:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

interface StarWrapperStylesProps extends StylesProps {
  active: boolean;
  readOnly?: boolean;
}

export const StarWrapper = styled.div<StarWrapperStylesProps>`
  ${radioWrapperRoot}
  width: 2rem;
  height: 2rem;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    pointer-events: none;

    path {
      fill: ${({ themeType }) =>
        themeType === 'light' ? `#efeded` : `${theme.palette.componentBackgroundDark}`};
      stroke: none;
      transition: fill 200ms;

      ${({ active }) =>
        active &&
        css`
          fill: ${theme.palette.primary.light};
        `}
    }
  }

  input {
    height: 100%;
    width: 100%;
    cursor: pointer;

    ${({ readOnly }) =>
      readOnly &&
      css`
        user-select: none;
        pointer-events: none;
      `}
  }

  ${({ readOnly }) =>
    readOnly &&
    css`
      cursor: default;
    `}
`;

export const Star = styled.input``;
