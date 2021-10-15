import { useRef, useState, useEffect } from 'react';

import styles from './Slider.module.scss';

const slideData = [1, 2, 3, 4, 5];

function Slider({ slideWidth }) {
  const sliderRef = useRef();

  const [sliderWidth, setSliderWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const { sliderWidth, isOverflowing } = getSettings();

    setSliderWidth(sliderWidth);
    setIsOverflowing(isOverflowing);
  }, []);

  function getSettings() {
    const offsets = getOffsets();
    const totalWidth = offsets[offsets.length - 1];

    const sliderWidth = sliderRef.current.offsetWidth;
    const isOverflowing = totalWidth > sliderWidth;

    return { isOverflowing, sliderWidth };
  }

  function getOffsets() {
    const offsets = [];
    let increment = 0;

    for (let i = 0; i < slideData.length; i++) {
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
    <div className={styles.carouselWrapper} data-overflowing={isOverflowing}>
      <button onClick={leftMove}>&#128896;</button>
      <button onClick={rightMove}>&#128898;</button>
      <div className={styles.carousel} ref={sliderRef}>
        <div className={styles.carouselItems} style={{ transform: `translateX(${translateX}px)` }}>
          {slideData.map(item => (
            <span className={styles.item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
