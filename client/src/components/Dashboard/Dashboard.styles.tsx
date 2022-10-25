import styled from 'styled-components';

import { StylesProps } from 'types';

import theme from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'styles/constants';
import { colorChangeOnHover } from 'styles/mixins';
import { Widget, WidgetBody } from 'components/Widget/Widget.styles';
import { Flex } from 'styles/global';
import { ButtonSwitch } from 'components/ButtonSwitch/ButtonSwitch.styles';

export const Dashboard = styled.div<StylesProps>`
  display: grid;
  grid-auto-columns: 18.5rem 1fr;
  grid-gap: 2.5rem;
  grid-template-areas:
    'current forecast'
    'map map';
  width: 100%;

  @media ${breakpoints.mdalt}, ${breakpoints.largePortrait} {
    grid-auto-columns: 1fr 1fr;
    grid-template-areas:
      'current current'
      'forecast forecast'
      'map map';
    grid-row-gap: 8rem;
  }

  @media ${breakpoints.largeLandscape} {
    height: calc(100vh - ${HEADER_HEIGHT}rem - ${FOOTER_HEIGHT}rem);
  }
`;

export const DashboardCurrent = styled.div<StylesProps>`
  grid-area: current;

  h3 {
    height: 3rem;
    margin-bottom: 1rem;
    line-height: 3rem;
  }

  @media ${breakpoints.mdalt}, ${breakpoints.largePortrait} {
    ${Widget} {
      width: 100%;
    }
  }

  @media ${breakpoints.largeLandscape} {
    ${Widget} {
      height: 100%;
    }

    ${WidgetBody} {
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
    }
  }
`;

export const DashboardToolbar = styled.div<StylesProps>`
  margin-bottom: 1rem;

  @media ${breakpoints.sm} {
    > ${Flex} {
      flex-direction: column;
      align-items: flex-start;
    }

    ${ButtonSwitch} {
      margin-top: 1rem;
    }
  }
`;

export const DashboardForecast = styled.div<StylesProps>`
  grid-area: forecast;
  height: 16.775rem;

  @media ${breakpoints.largeLandscape} {
    height: 100%;
  }
`;

export const DashboardForecastTypes = styled.ul<StylesProps>``;

interface DashboardForecastTypeStyles extends StylesProps {
  active: boolean;
}

export const DashboardForecastType = styled.li<DashboardForecastTypeStyles>`
  font-size: 1.17rem;
  font-weight: 700;
  color: ${({ themeType, active }) => {
    if (!active && themeType === 'light') {
      return theme.palette.black;
    }
    if (!active && themeType !== 'light') {
      return theme.palette.white;
    }
    if (active) {
      return theme.palette.primary.dark;
    }
    return null;
  }};

  transition: color 1.2s;
  will-change: color;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${colorChangeOnHover({ changeProp: 'color', transitionVal: 'color' })}
  }

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

export const DashboardForecastWidgets = styled.div<StylesProps>`
  width: 100%;
  height: 100%;
`;
