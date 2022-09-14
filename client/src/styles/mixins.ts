import { StylesProps } from 'types';

export const colorChange = (
  props: StylesProps,
  changeP: string,
  changeVal1: string,
  changeVal2: string,
  transitionVal: string
) => `
  ${changeP}: ${props.theme === 'light' ? changeVal1 : changeVal2};
  transition: ${transitionVal} 1.2s;
  will-change: ${transitionVal};
`;
