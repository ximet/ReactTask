import React, { FC } from 'react';
import styles from './styles.module.scss';

export enum LoaderStyles {
  search = 'searchContainer',
  main = 'loaderContainer'
}
interface LoaderProps {
  className: string;
}
export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={styles[className]}>
      <div className={styles.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
