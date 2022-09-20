import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 2.5rem;
  margin: 0 auto;
`;

interface FlexProps {
  directionColumn?: boolean;
  justifySpaceBetween?: boolean;
  justifyFlexEnd?: boolean;
  justifyFlexStart?: boolean;
  alignFlexStart?: boolean;
}

export const Flex = styled.div<FlexProps>`
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
