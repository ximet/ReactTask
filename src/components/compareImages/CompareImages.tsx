import React, { FC, useEffect, useRef, useState } from 'react';

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

    const getNewX = (x: number) => {
      let correctX = x - leftBorder;

      correctX = correctX <= 0 ? 0 : correctX;
      correctX = correctX >= wrapperWidth ? wrapperWidth : correctX;

      return correctX;
    };

    const getPercent = (x: number) => {
      return (x / wrapperWidth) * 100;
    };

    const moveHandler = (e: MouseEvent | TouchEvent) => {
      let newX: number;
      if ('movementX' in e) {
        newX = getNewX(e.pageX);
      } else {
        newX = getNewX(e.touches[0].pageX);
      }
      const percent = getPercent(newX);
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
