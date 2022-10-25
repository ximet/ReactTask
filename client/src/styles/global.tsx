import styled, { css } from 'styled-components';

import { StylesProps } from 'types';

import { HEADER_HEIGHT } from './constants';
import { spinning } from './keyframes';
import { spinnerRoot } from './mixins';
import { breakpoints } from './breakpoints';

import theme from './theme';

export const Container = styled.div`
  position: relative;
  max-width: 155rem;
  width: 100%;
  padding: 0 2.5rem;
  margin: 0 auto;
  z-index: 1;

  @media ${breakpoints.lg} {
    padding: 0 2rem;
  }

  @media ${breakpoints.md} and (orientation: landscape) {
    padding: 0 1.5rem;
  }

  @media ${breakpoints.xs} {
    padding: 0 1.5rem;
  }

  @media ${breakpoints.xxs} {
    padding: 0 1rem;
  }
`;

interface FlexStylesProps {
  directionColumn?: boolean;
  justifySpaceBetween?: boolean;
  justifyFlexEnd?: boolean;
  justifyFlexStart?: boolean;
  alignFlexStart?: boolean;
}

export const Flex = styled.div<FlexStylesProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${({ directionColumn }) =>
    directionColumn &&
    css`
      flex-direction: column;
    `};

  ${({ justifySpaceBetween }) =>
    justifySpaceBetween &&
    css`
      justify-content: space-between;
    `};

  ${({ justifyFlexEnd }) =>
    justifyFlexEnd &&
    css`
      justify-content: flex-end;
    `};

  ${({ justifyFlexStart }) =>
    justifyFlexStart &&
    css`
      justify-content: flex-start;
    `};

  ${({ alignFlexStart }) =>
    alignFlexStart &&
    css`
      align-items: flex-start;
    `};
`;

interface WaveStylesProps {
  reversed?: boolean;
}

export const Wave = styled.svg<WaveStylesProps>`
  position: absolute;
  bottom: ${({ reversed }) => (reversed ? 'unset' : 0)};
  top: ${({ reversed }) => (reversed ? 0 : 'unset')};
  height: calc(100% - ${HEADER_HEIGHT}rem);
  transform: ${({ reversed }) => reversed && `rotate(180deg)`};

  path {
    fill: ${theme.palette.primary.light};
    stroke: none;
  }
`;

export const Headline = styled.h1`
  span {
    display: block;
    margin-bottom: 1rem;
    font-size: 4.25rem;
    line-height: 1;
    color: ${theme.palette.primary.dark};
  }

  @media ${breakpoints.md} {
    span {
      font-size: 3.25rem;
    }
  }

  @media only screen and (max-width: 22.25em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-height: 49.125em) and (orientation: portrait) {
    margin-top: -5vh;
  }
`;

export const Spinner = styled.div<StylesProps>`
  ${spinnerRoot};
  margin: 4rem auto;
  font-size: 1rem;
  border: ${({ themeType }) =>
    `1.1em solid ${
      themeType === 'light'
        ? theme.palette.componentBackgroundLight
        : theme.palette.componentBackgroundDark
    }`};
  border-left: 1.1em solid ${theme.palette.primary.light};
  animation: ${spinning} 1.1s infinite linear;

  &:after {
    ${spinnerRoot};
  }
`;
