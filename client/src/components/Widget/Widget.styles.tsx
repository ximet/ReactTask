import styled from 'styled-components';

import theme from 'styles/theme';

import { StylesProps } from 'types';

interface WidgetStyles extends StylesProps {
  color: string;
}

export const Widget = styled.article<WidgetStyles>`
  width: 100%;
  color: ${theme.palette.black};
  background: ${(props: WidgetStyles) => {
    if (props.color !== 'primary') {
      // return some code later
    }
    return theme.palette.primary.light;
  }};
  border-radius: ${theme.shape.borderRadius};
  overflow: hidden;
`;

export const WidgetHeader = styled.div<WidgetStyles>`
  height: 3rem;
  padding: 0rem 1rem;
  font-weight: 500;
  background: ${(props: WidgetStyles) => props.color === 'primary' && theme.palette.primary.medium};
  border-bottom: ${(props: WidgetStyles) =>
    props.color !== 'primary' ? theme.palette.grey.dark : theme.palette.grey.medium};
`;

export const WidgetBody = styled.div<StylesProps>`
  padding: 0.75rem 1rem 1.25rem 1rem;
`;

export const WidgetDetails = styled.div<StylesProps>`
  width: 100%;

  &:first-of-type {
    margin-right: 1rem;
  }

  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const WidgetTemp = styled.p<StylesProps>`
  margin-bottom: 0.5rem;
  font-size: 3.5rem;
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
