import styled from 'styled-components';

import { StylesProps } from 'types';

import theme from 'styles/theme';
import { colorChange } from 'styles/mixins';

interface AccordionStylesProps extends StylesProps {
  active: boolean;
}

export const Accordion = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export const AccordionTab = styled.div<AccordionStylesProps>`
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  button {
    cursor: inherit;
    font-weight: 500;
    text-align: start;
    ${({ themeType }) =>
      colorChange({
        themeType,
        changeProp: 'color',
        changeVal1: theme.palette.black,
        changeVal2: theme.palette.white,
        transitionVal: 'color'
      })}
    transition: color 1.2s, background 0s 1.2s;
  }

  svg {
    height: 1rem;
    transform: ${({ active }) => (active ? 'rotate(0deg)' : 'rotate(180deg)')};
    transition: transform 0.25s ease;
  }
`;

export const AccordionContent = styled.div<AccordionStylesProps>`
  width: 100%;
  max-height: ${({ active }) => (active ? '24rem' : '0rem')};
  overflow-y: scroll;
  transition: max-height 0.6s ease;
  will-change: max-height;
`;
