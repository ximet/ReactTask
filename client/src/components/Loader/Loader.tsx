import React, { FC } from 'react';
import styles from './styles.module.scss';

export const Loader: FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
