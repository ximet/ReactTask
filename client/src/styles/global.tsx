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

  ${props =>
    props.directionColumn &&
    css`
      flex-direction: column;
    `};

  ${props =>
    props.justifySpaceBetween &&
    css`
      justify-content: space-between;
    `};

  ${props =>
    props.justifyFlexEnd &&
    css`
      justify-content: flex-end;
    `};

  ${props =>
    props.justifyFlexStart &&
    css`
      justify-content: flex-start;
    `};

  ${props =>
    props.alignFlexStart &&
    css`
      align-items: flex-start;
    `};
`;
