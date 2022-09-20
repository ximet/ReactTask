import { StylesProps } from 'types';

export const colorChange = (
  { themeType }: StylesProps,
  changeP: string,
  changeVal1: string,
  changeVal2: string,
  transitionVal: string
) => `
  ${changeP}: ${themeType === 'light' ? changeVal1 : changeVal2};
  transition: ${transitionVal} 1.2s;
  will-change: ${transitionVal};
`;
