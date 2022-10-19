import React, { FC, useEffect, useRef, useState } from 'react';
import { getNewX, getPercent } from './CompareImages.utils';

import styles from './CompareImages.css';

interface CompareImagesProps {
  leftPhoto: string;
  rightPhoto: string;
}

const CompareImages: FC<CompareImagesProps> = ({ leftPhoto, rightPhoto }) => {
  const [isDown, setIsDown] = useState<boolean>(false);

  const lineRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rightPhotoRef = useRef<HTMLDivElement>(null);

  const downHandler = () => setIsDown(true);
  const upHandler = () => setIsDown(false);

  useEffect(() => {
    const { current: lineElement } = lineRef;
    const { current: wrapperElement } = wrapperRef;
    const { current: rightPhoto } = rightPhotoRef;

    if (!(wrapperElement && lineElement && rightPhoto)) {
      return;
    }

    const leftBorder = wrapperElement.getBoundingClientRect().left;
    const wrapperWidth = wrapperElement.getBoundingClientRect().width;

    const moveHandler = (e: MouseEvent | TouchEvent) => {
      const newX = getNewX({
        x: 'movementX' in e ? e.pageX : e.touches[0].pageX,
        leftBorder,
        wrapperWidth
      });
      const percent = getPercent({ x: newX, wrapperWidth });
      lineElement.style.left = newX + 'px';
      rightPhoto.style.clipPath = `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)`;
    };

    if (isDown) {
      window.addEventListener('mousemove', moveHandler);
      window.addEventListener('touchmove', moveHandler);
    }

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('touchmove', moveHandler);
    };
  }, [isDown]);

  useEffect(() => {
    window.addEventListener('mouseup', upHandler);
    window.addEventListener('touchend', upHandler);

    return () => {
      window.removeEventListener('mouseup', upHandler);
      window.removeEventListener('touchend', upHandler);
    };
  }, []);

  return (
    <div className={styles['wrapper']} ref={wrapperRef}>
      <div
        className={styles['left-image']}
        style={{
          backgroundImage: `url(${leftPhoto})`
        }}
      ></div>
      <div
        className={styles['right-image']}
        style={{
          backgroundImage: `url(${rightPhoto})`
        }}
        ref={rightPhotoRef}
      ></div>
      <div
        className={styles['line']}
        ref={lineRef}
        onMouseDown={downHandler}
        onTouchStart={downHandler}
      ></div>
    </div>
  );
};

export default CompareImages;
