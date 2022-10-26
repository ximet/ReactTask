import styled, { css } from 'styled-components';

import { StylesProps } from 'types';
import {
  ForecastType,
  WeatherType,
  AirQualityType
} from 'components/Dashboard/DashboardForecast/DashboardForecast.utils';

import { breakpoints } from 'styles/breakpoints';
import { Flex } from 'styles/global';
import theme from 'styles/theme';

interface WidgetStyles extends StylesProps {
  color?: string;
  active?: boolean;
  selectedForecastType?: ForecastType;
  pointerEvents?: string;
}

export const Widget = styled.article<WidgetStyles>`
  width: ${({ color, active }: WidgetStyles) =>
    color !== 'primary' && !active ? '8.5rem' : '20rem'};
  color: ${({ themeType, color }: WidgetStyles) => {
    if (color === 'primary') {
      return theme.palette.black;
    }
    return themeType === 'light' ? theme.palette.black : theme.palette.white;
  }};
  background: ${({ themeType, color }: WidgetStyles) => {
    if (color !== 'primary') {
      return themeType === 'light'
        ? theme.palette.componentBackgroundLight
        : theme.palette.componentBackgroundDark;
    }
    return theme.palette.primary.light;
  }};
  border-radius: ${theme.shape.borderRadius};
  transition: color 1.2s, background 1.2s, width 0.1s ease;
  overflow: hidden;
  pointer-events: ${({ pointerEvents }: WidgetStyles) =>
    pointerEvents === 'true' ? 'auto' : 'none'};
  user-select: none;
`;

export const WidgetHeader = styled.div<WidgetStyles>`
  height: 3rem;
  padding: 0rem 1rem;
  font-weight: 500;
  background: ${({ themeType, color }) => {
    if (color !== 'primary' && themeType === 'light') {
      return theme.palette.grey.light;
    }
    if (color !== 'primary' && themeType !== 'light') {
      return theme.palette.grey.darkest;
    }
    if (color === 'primary') {
      return theme.palette.primary.medium;
    }
    return null;
  }};
  transition: background 1.2s;
  will-change: background;
  border-bottom: ${({ color }) =>
    color !== 'primary' ? theme.palette.grey.dark : theme.palette.grey.medium};

  time:first-of-type {
    display: ${({ selectedForecastType, active, color }) => {
      if (
        selectedForecastType === (WeatherType.daily || AirQualityType.daily) ||
        active ||
        color === 'primary'
      ) {
        return 'block';
      }
      return 'none';
    }};
  }

  time:last-of-type {
    display: ${({ selectedForecastType, active, color }) => {
      if (
        selectedForecastType === (WeatherType.daily || AirQualityType.daily) &&
        !active &&
        color !== 'primary'
      ) {
        return 'none';
      }
      return 'block';
    }};
  }

  ${Flex} {
    justify-content: ${({ active, color }) =>
      active || color === 'primary' ? 'space-between' : 'center'};
  }
`;

export const WidgetBody = styled.div<WidgetStyles>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem 1rem 1.25rem 1rem;

  ${({ color, active }) =>
    color !== 'primary' &&
    !active &&
    css`
      flex-direction: column;
    `};
`;

export const WidgetDetails = styled.div<StylesProps>`
  &:first-of-type {
    margin-right: 0.5rem;
  }

  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const WidgetDetailsTop = styled.div<StylesProps>`
  margin-bottom: 0.5rem;

  @media ${breakpoints.largeLandscape} {
    text-align: center;
  }
`;

export const WidgetDetailsBottom = styled.div<WidgetStyles>`
  display: ${({ color, active }: WidgetStyles) =>
    color !== 'primary' && !active ? 'none' : 'block'};
`;

export const WidgetTemp = styled.p<StylesProps>`
  font-size: 3.5rem;
`;

export const WidgetTempMaxMin = styled.p<StylesProps>`
  text-align: center;

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

  svg {
    margin: -0.5rem 0;
    width: 6rem;
  }

  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    text-align: center;
  }
`;

export const WidgetDetailsItem = styled.p<WidgetStyles>`
  span {
    color: ${({ color }: WidgetStyles) =>
      color === 'primary' ? theme.palette.grey.dark : theme.palette.grey.medium};
  }
`;
