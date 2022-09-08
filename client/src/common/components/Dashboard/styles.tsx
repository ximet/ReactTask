import styled from 'styled-components';

import { StylesProps } from '../../../types';

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

export const DashboardForecast = styled.div<StylesProps>`
  grid-area: forecast;
`;

export const DashboardToolbar = styled.div<StylesProps>``;
