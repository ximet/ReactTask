import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import styles from './Slider.module.scss';

function Slider({ slideComponents, slideWidth }) {
  const sliderRef = useRef();

  const [sliderWidth, setSliderWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);
    return () => window.removeEventListener('resize', updateSliderSettings);
  }, []);

  function updateSliderSettings() {
    const { sliderWidth, isOverflowing } = getSettings();

    setSliderWidth(sliderWidth);
    setIsOverflowing(isOverflowing);
  }

  function getSettings() {
    const offsets = getOffsets();
    const totalWidth = offsets[offsets.length - 1];

    const sliderWidth = sliderRef.current.clientWidth;
    const isOverflowing = totalWidth > sliderWidth;

    return { isOverflowing, sliderWidth };
  }

  function getOffsets() {
    const offsets = [];
    let increment = 0;

    for (let i = 0; i < slideComponents.length; i++) {
      increment += slideWidth;
      offsets[i] = increment;
    }

    return offsets;
  }

  function leftMove() {
    if (translateX === 0) return false;

    const offsets = getOffsets();
    let targetElOffset = 0;

    for (let i = offsets.length - 1; i >= 0; i--) {
      if (Math.abs(translateX) > offsets[i]) {
        targetElOffset = -offsets[i];
      }
    }

    setTranslateX(targetElOffset);
  }

  function rightMove() {
    const rightEdgeOffset = sliderWidth - translateX;
    const offsets = getOffsets();

    for (let i = 0; i < offsets.length; i++) {
      if (offsets[i] > rightEdgeOffset) {
        setTranslateX(-(offsets[i] - sliderWidth));
        return;
      }
    }
  }

  return (
    <div className={styles.sliderWrapper} data-overflowing={isOverflowing}>
      <button onClick={leftMove}>&#128896;</button>
      <button onClick={rightMove}>&#128898;</button>
      <div className={styles.slider} ref={sliderRef}>
        <div className={styles.sliderItems} style={{ transform: `translateX(${translateX}px)` }}>
          {slideComponents.map(slide => (
            <div key={uuidv4()} className={styles.item}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  slideComponents: PropTypes.arrayOf(PropTypes.element.isRequired),
  slideWidth: PropTypes.number.isRequired
};

export default Slider;
