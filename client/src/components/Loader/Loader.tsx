import React, { FC } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}
export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={`${styles.loaderContainer} ${className}`}>
      <div className={styles.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
