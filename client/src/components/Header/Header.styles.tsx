import styled from 'styled-components';

import { StylesProps } from 'types';

import theme from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { colorChange } from 'styles/mixins';
import { ButtonSwitch } from 'components/ButtonSwitch/ButtonSwitch.styles';
import { Search } from 'components/Search/Search.styles';
import { GeoLocation } from 'components/GeoLocation/GeoLocation.styles';

export const Header = styled.header<StylesProps>`
  position: relative;
  padding: 1.5rem 0;
  z-index: 2;

  svg {
    width: 2rem;
  }

  @media ${breakpoints.sm} {
    ${Search} {
      display: none;
    }

    ${GeoLocation} {
      p {
        max-width: 1rem;
      }

      svg {
        width: 1rem;
      }
    }
  }
`;

export const HeaderAction = styled.div<StylesProps>`
  ${ButtonSwitch} {
    margin-right: 2rem;

    @media ${breakpoints.sm} {
      width: 0;
      background: none;
      margin-right: 0;

      ::before {
        display: none;
      }

      svg:last-of-type {
        display: none;
      }
    }
  }
`;

export const HeaderMenuButton = styled.button<StylesProps>`
  cursor: pointer;

  svg {
    ${({ themeType }: StylesProps) =>
      colorChange({
        themeType,
        changeProp: 'fill',
        changeVal1: theme.palette.black,
        changeVal2: theme.palette.white,
        transitionVal: 'fill'
      })}

    @media ${breakpoints.sm} {
      margin-top: 3px;
    }
  }
`;
