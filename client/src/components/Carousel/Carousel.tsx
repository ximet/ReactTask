import React, { FunctionComponent, useState, useRef, MouseEvent } from 'react';

// Styles
import * as S from './Carousel.styles';

interface CarouselState {
  isPressed: boolean;
  startX: number | null;
  x: number | null;
}

interface CarouselProps {
  setCarouselChildPointerEv: (enabled: boolean) => void;
}

const Carousel: FunctionComponent<CarouselProps> = ({ setCarouselChildPointerEv, children }) => {
  const [{ isPressed, startX, x }, setCarouselState] = useState<CarouselState>({
    isPressed: false,
    startX: null,
    x: null
  });

  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  const checkBoundary = (): void => {
    const outer = carouselRef.current!.getBoundingClientRect();
    const inner = carouselTrackRef.current!.getBoundingClientRect();

    if (parseInt(carouselTrackRef.current!.style.left, 10) > 0) {
      carouselTrackRef.current!.style.left = '0px';
    } else if (inner.right < outer.right) {
      carouselTrackRef.current!.style.left = `-${inner.width - outer.width}px`;
    }
  };

  // Handlers
  const handleCursorDown = (e: MouseEvent<HTMLDivElement>): void => {
    setCarouselState(prevState => ({
      ...prevState,
      isPressed: true,
      startX: e.nativeEvent.offsetX - carouselTrackRef.current!.offsetLeft
    }));
  };

  const handleCursorMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!isPressed) {
      setCarouselChildPointerEv(true);
      return;
    }

    setCarouselState(prevState => ({
      ...prevState,
      x: e.nativeEvent.offsetX
    }));

    carouselTrackRef.current!.style.left = `${x! - startX!}px`;
    setCarouselChildPointerEv(false);
    checkBoundary();
  };

  const handleCursorUp = (): void => {
    setCarouselState(prevState => ({
      ...prevState,
      isPressed: false
    }));
  };

  return (
    <S.Carousel
      aria-roledescription="carousel"
      ref={carouselRef}
      active={isPressed}
      onMouseDown={handleCursorDown}
      onMouseLeave={handleCursorUp}
      onMouseUp={handleCursorUp}
      onMouseMove={handleCursorMove}
    >
      <S.CarouselTrack role="group" ref={carouselTrackRef}>
        {children}
      </S.CarouselTrack>
    </S.Carousel>
  );
};

export default Carousel;
