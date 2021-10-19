import React, { useRef, useEffect, useState } from 'react';
import classes from './Slider.module.css';
import { sliderSlidesTypes } from './types';
import { number } from 'prop-types'

function Slider({ slides, slidesToShow }) {
  const slideRef = useRef(null);
  const sliderRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [slideMargin, setSlideMargin] = useState(0);

  useEffect(() => {
    const emptySpace = sliderRef.current.offsetWidth - slideRef.current.offsetWidth * slidesToShow;
    const newSlideMargin = emptySpace / (slidesToShow * 2);

    setOffset(slideRef.current.offsetWidth + newSlideMargin);
    setSlideMargin(newSlideMargin);
  }, []);

  const scrollRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + offset + slideMargin;
  };

  const scrollLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - offset - slideMargin;
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftArrow} onClick={scrollLeft}></div>
      <div id="slider" ref={sliderRef} className={classes.slides}>
        {slides.map(slide => {
          return (
            <div
              ref={slideRef}
              key={slide.id}
              style={{ marginLeft: slideMargin, marginRight: slideMargin }}
            >
              {slide.component}
            </div>
          );
        })}
      </div>
      <div className={classes.rightArrow} onClick={scrollRight}></div>
    </div>
  );
}

Slider.defaultProps = {
  slidesToShow: 4
}

Slider.propTypes = {
  slides: sliderSlidesTypes,
  slidesToShow: number
};

export default Slider;
