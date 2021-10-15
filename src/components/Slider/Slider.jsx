import { useState, useEffect } from 'react';

import styles from './Slider.module.scss';

const slideData = [1, 2, 3, 4, 5];
const slideWidth = 200;

function Slider() {
  const [sliderSettings, setSliderSettings] = useState({
    width: 400,
    translateX: 0,
    isOverflowing: false
  });

  useEffect(() => {
    const isOverflowing = getSettings();
    setSliderSettings({ ...sliderSettings, isOverflowing });
  }, []);

  function getSettings() {
    const offsets = getOffsets();
    const totalWidth = offsets[offsets.length - 1];
    const isOverflowing = totalWidth > sliderSettings.width;

    return isOverflowing;
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

  function getPrevElOffset() {
    const { translateX } = sliderSettings;

    if (translateX === 0) return false;

    const offsets = getOffsets();

    for (let i = offsets.length - 1; i >= 0; i--) {
      if (Math.abs(translateX) > offsets[i]) {
        return -offsets[i];
      }
    }
    return 0;
  }

  function getNextElOffset() {
    const { translateX } = sliderSettings;
    const rightEdgeOffset = slideWidth - translateX;
    const offsets = getOffsets();

    for (let i = 0; i < offsets.length - 1; i++) {
      if (offsets[i] > rightEdgeOffset) {
        return -(offsets[i] - slideWidth);
      }
    }
    return translateX;
  }

  function move(direction) {
    const targetElOffset = direction === 'left' ? getPrevElOffset() : getNextElOffset();
    setSliderSettings({ ...sliderSettings, translateX: targetElOffset });
  }

  return (
    <div className={styles.carouselWrapper} data-overflowing={sliderSettings.isOverflowing}>
      <button onClick={e => move('left')}>&lsaquo;</button>
      <button onClick={e => move('right')}>&rsaquo;</button>
      <div className={styles.carousel}>
        <div
          className={styles.carouselItems}
          style={{ transform: `translateX(${sliderSettings.translateX}px)` }}
        >
          {slideData.map(item => (
            <span className={styles.item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
