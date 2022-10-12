import { css } from 'styled-components';

import { StylesProps } from 'types';

import theme from './theme';

export const colorChange = (
  { themeType }: StylesProps,
  changeProp: string,
  changeVal1: string,
  changeVal2: string,
  transitionVal: string
) => `
  ${changeProp}: ${themeType === 'light' ? changeVal1 : changeVal2};
  transition: ${transitionVal} 1.2s;
  will-change: ${transitionVal};
`;

export const colorChangeOnHover = (changeProp: string, transitionVal: string) => `
  ${changeProp}: ${theme.palette.primary.dark};
  transition: ${transitionVal} 0.15s;
`;

export const imageRoot = `
  border-radius: ${theme.shape.borderRadius};
  box-shadow: ${theme.shadows[1]};
`;

export const sectionRoot = `
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

export const radioWrapperRoot = `
  position: relative;
  cursor: pointer;

  label {
    cursor: pointer;
  }
  
  input {
    opacity: 0;
    z-index: 0;
  }
`;

interface starWrapperRootStylesProps extends StylesProps {
  active: boolean;
}

export const starWrapperRoot = ({ themeType, active }: starWrapperRootStylesProps) => css`
  width: 2rem;
  height: 2rem;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    pointer-events: none;

    path {
      fill: ${themeType === 'light' ? `#efeded` : `${theme.palette.componentBackgroundDark}`};
      stroke: none;
      transition: fill 200ms;

      ${active &&
      css`
        fill: ${theme.palette.primary.light};
      `}
    }
  }
`;

export const spinnerRoot = `
  border-radius: 50%;
  width: 10em;
  height: 10em;
`;

export const noScrollbar = `
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const blobContainer = `
  position: absolute;

  svg {
    width: 100%;
    fill: ${theme.palette.primary.light};
    stroke: none;
  }
`;
