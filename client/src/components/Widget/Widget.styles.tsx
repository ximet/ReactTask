import styled, { css } from 'styled-components';

import theme from 'styles/theme';

import { StylesProps } from 'types';

interface WidgetStyles extends StylesProps {
  color?: string;
  active?: boolean;
  pointerEvents?: string;
}

export const Widget = styled.article<WidgetStyles>`
  width: ${(props: WidgetStyles) =>
    props.color !== 'primary' && !props.active ? '10rem' : '18.5rem'};
  color: ${(props: WidgetStyles) => {
    if (props.color === 'primary') {
      return theme.palette.black;
    }
    return props.theme === 'light' ? theme.palette.black : theme.palette.white;
  }};
  background: ${(props: WidgetStyles) => {
    if (props.color !== 'primary') {
      return props.theme === 'light'
        ? theme.palette.componentBackgroundLight
        : theme.palette.componentBackgroundDark;
    }
    return theme.palette.primary.light;
  }};
  border-radius: ${theme.shape.borderRadius};
  transition: color 1.2s, background 1.2s, width 0.1s ease;
  overflow: hidden;
  user-select: none;
  pointer-events: ${(props: WidgetStyles) => (props.pointerEvents === 'true' ? 'auto' : 'none')};

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

export const WidgetHeader = styled.div<WidgetStyles>`
  height: 3rem;
  padding: 0rem 1rem;
  font-weight: 500;
  background: ${(props: WidgetStyles) => {
    if (props.color !== 'primary' && props.theme === 'light') {
      return theme.palette.grey.light;
    }
    if (props.color !== 'primary' && props.theme !== 'light') {
      return theme.palette.grey.darkest;
    }
    if (props.color === 'primary') {
      return theme.palette.primary.medium;
    }
    return null;
  }};
  transition: background 1.2s;
  will-change: background;
  border-bottom: ${(props: WidgetStyles) =>
    props.color !== 'primary' ? theme.palette.grey.dark : theme.palette.grey.medium};
`;

export const WidgetBody = styled.div<WidgetStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem 1.25rem 1rem;

  ${props =>
    props.color !== 'primary' &&
    !props.active &&
    css`
      flex-direction: column;
    `};
`;

export const WidgetDetails = styled.div<StylesProps>`
  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const WidgetDetailsTop = styled.div<StylesProps>``;

export const WidgetDetailsBottom = styled.div<WidgetStyles>`
  display: ${(props: WidgetStyles) =>
    props.color !== 'primary' && !props.active ? 'none' : 'block'};
`;

export const WidgetTemp = styled.p<StylesProps>`
  margin-bottom: 0.5rem;
  font-size: 3.5rem;
`;

export const WidgetTempMaxMin = styled.p<StylesProps>`
  margin-bottom: 0.5rem;

  span:first-of-type {
    font-size: 3.5rem;
  }

  span:last-of-type {
    font-size: 2rem;
  }
`;

export const WidgetImg = styled.div<StylesProps>`
  img {
    width: 5rem;
  }

  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
  }

  margin-bottom: 0.5rem;
`;

export const WidgetDetailsItem = styled.p<WidgetStyles>`
  span {
    color: ${(props: WidgetStyles) =>
      props.color === 'primary' ? theme.palette.grey.dark : theme.palette.grey.medium};
  }
`;
