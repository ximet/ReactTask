import styled from 'styled-components';

import { StylesProps } from 'types';

import { breakpoints } from 'styles/breakpoints';

interface CarouselStyles extends StylesProps {
  active?: boolean;
}

export const Carousel = styled.div<CarouselStyles>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  cursor: ${({ active }) => (active ? 'grabbing' : 'grab')};
`;

export const CarouselTrack = styled.div<CarouselStyles>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  pointer-events: none;
  padding-bottom: 0.5rem;

  @media ${breakpoints.largeLandscape} {
    display: grid;
    grid-template-rows: repeat(2, 16.775rem);
  }
`;
