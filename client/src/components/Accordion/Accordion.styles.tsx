import styled from 'styled-components';

import { StylesProps } from 'types';

import { noScrollbar } from 'styles/mixins';

interface AccordionStylesProps extends StylesProps {
  active: boolean;
  isExpanded: boolean;
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
  }

  svg {
    height: 1rem;
    transform: ${({ active, isExpanded }) =>
      active || isExpanded ? 'rotate(0deg)' : 'rotate(180deg)'};
    transition: transform 0.25s ease;
  }
`;

export const AccordionContent = styled.div<AccordionStylesProps>`
  width: 100%;
  max-height: ${({ active, isExpanded }) => (active || isExpanded ? '24rem' : '0rem')};
  overflow-y: scroll;
  transition: max-height 0.6s ease;
  will-change: max-height;
  ${noScrollbar}
`;
