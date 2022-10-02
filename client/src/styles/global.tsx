import styled, { css } from 'styled-components';

import { HEADER_HEIGHT } from './constants';

import theme from './theme';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 2.5rem;
  margin: 0 auto;
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
`;
