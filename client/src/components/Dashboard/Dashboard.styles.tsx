import styled from 'styled-components';

import theme from 'styles/theme';

import { StylesProps } from 'types';

export const Dashboard = styled.div<StylesProps>`
  display: grid;
  grid-auto-columns: 18.5rem 1fr;
  grid-column-gap: 2.5rem;
  grid-template-areas:
    'current forecast'
    'map cities';
  width: 100%;
  height: calc(100vh - 6.5rem);
  padding-bottom: 1.5rem;
`;

export const DashboardCurrent = styled.div<StylesProps>`
  grid-area: current;

  h3 {
    height: 3rem;
    margin-bottom: 1rem;
    line-height: 3rem;
  }
`;

export const DashboardToolbar = styled.div<StylesProps>`
  margin-bottom: 1rem;
`;

export const DashboardForecast = styled.div<StylesProps>`
  grid-area: forecast;
  height: 16.775rem;
`;

export const DashboardForecastTypes = styled.ul<StylesProps>`
  width: 33%;
`;

interface DashboardForecastTypeStyles extends StylesProps {
  active: boolean;
}

export const DashboardForecastType = styled.li<DashboardForecastTypeStyles>`
  font-size: 1.17rem;
  font-weight: 700;
  color: ${props => {
    if (!props.active && props.theme === 'light') {
      return theme.palette.black;
    }
    if (!props.active && props.theme !== 'light') {
      return theme.palette.white;
    }
    if (props.active) {
      return theme.palette.primary.dark;
    }
    return null;
  }};

  transition: color 1.2s;
  will-change: color;
  cursor: pointer;

  &:hover {
    color: ${theme.palette.primary.medium};
    transition: color 0.15s;
  }
`;

export const DashboardForecastWidgets = styled.div<StylesProps>`
  width: 100%;
  height: 100%;
`;
