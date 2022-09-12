import styled from 'styled-components';

import theme from '../../styles/theme';
import { colorChange } from '../../styles/mixins';

import { StylesProps } from '../../../types';

interface ButtonSwitchStylesProps extends StylesProps {
  width: string;
  switchType: string;
  infoType?: string;
}

export const ButtonSwitch = styled.button<ButtonSwitchStylesProps>`
  position: relative;
  width: ${(props: ButtonSwitchStylesProps) => props.width};
  height: 3rem;
  padding: 0 2rem;
  border-radius: ${theme.shape.borderRadius};
  ${(props: ButtonSwitchStylesProps) =>
    colorChange(
      props,
      'background',
      theme.palette.componentBackgroundLight,
      theme.palette.componentBackgroundDark,
      'background'
    )}
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: ${(props: ButtonSwitchStylesProps) => {
      if (props.switchType === 'theme') {
        return props.theme === 'light' ? '0' : '50%';
      }
      return props.infoType === 'forecast' ? '0' : '50%';
    }};
    top: 0;
    width: 50%;
    height: 100%;
    background: ${theme.palette.primary.light};
    border-radius: ${theme.shape.borderRadius};
    box-shadow: ${theme.shadows[0]};
    transition: 0.8s ${theme.transitions[0]};
  }

  svg,
  span {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  svg {
    width: 2rem;
  }

  svg:first-of-type {
    left: 0.57rem;
  }

  svg:last-of-type {
    right: 0.57rem;
  }

  span {
    font-weight: 500;
    transition: color 1.2s;
  }

  span:first-of-type {
    left: 1.5rem;
    color: ${(props: ButtonSwitchStylesProps) => {
      if (props.theme === 'light' && props.infoType !== 'forecast') {
        return theme.palette.grey.dark;
      }
      if (props.theme === 'dark' && props.infoType !== 'forecast') {
        return theme.palette.grey.medium;
      }
      return theme.palette.black;
    }};
  }

  span:last-of-type {
    right: 1.5rem;
    color: ${(props: ButtonSwitchStylesProps) => {
      if (props.theme === 'light' && props.infoType === 'forecast') {
        return theme.palette.grey.dark;
      }
      if (props.theme === 'dark' && props.infoType === 'forecast') {
        return theme.palette.grey.medium;
      }
      return theme.palette.black;
    }};
  }
`;
