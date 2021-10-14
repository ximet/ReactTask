import { useState, useEffect } from 'react';

import styles from './Slider.module.scss';

const slideData = [1, 2, 3];
const MIN_X_DISTANCE = 20;
const BTN_WIDTH = 50;
const slideWidth = 100;

function Slider() {
  const [sliderSettings, setSliderSettings] = useState({
    width: 0,
    translateX: 0,
    isOverflowing: false
  });

  useEffect(() => {
    // const width = sliderSettings.width;
    const isOverfloving = getIsOverfloving();

    console.log(isOverfloving);
  }, []);

  function getIsOverfloving() {
    const offsets = getOffsets();
    const totalWidth = offsets[offsets.length - 1];
    const offset = sliderSettings.isOverflowing ? BTN_WIDTH * 2 : 0;

    setSliderSettings({ ...sliderSettings, width: totalWidth });

    return totalWidth < slideWidth + offset;
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
      if (translateX - MIN_X_DISTANCE > offsets[i]) {
        return -offsets[i];
      }
    }
    return 0;
  }

  function getNextElOffset() {
    const { translateX } = sliderSettings;

    const rightEdgeOffset = slideWidth - translateX;
    const offsets = getOffsets();

    for (let i = 0; i < offsets.length; i++) {
      if (offsets[i] > rightEdgeOffset + MIN_X_DISTANCE) {
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
    <div className="carousel-wrapper" data-overflowing={sliderSettings.isOverflowing}>
      <button onClick={e => move('left')}>&lsaquo;</button>
      <button onClick={e => move('right')}>&rsaquo;</button>
      <div className="carousel">
        <ul style={{ transform: `translateX(${sliderSettings.translateX}px)` }}>
          {slideData.map(item => (
            <span>{item}</span>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
