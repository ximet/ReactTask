import styled from 'styled-components';

import { StylesProps } from 'types';

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
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  pointer-events: none;
  padding-bottom: 0.5rem;
`;
