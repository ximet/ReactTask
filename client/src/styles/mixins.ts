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
