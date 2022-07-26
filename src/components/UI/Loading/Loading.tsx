import React from 'react';
import { ENDPOINTS } from '../../../helpers/api';
import styles from './Loading.module.scss';

interface LoadingProps {
  width?: string;
}

const Loading: React.FunctionComponent<LoadingProps> = ({ width }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.sunImg}
        width={width || '70'}
        src={ENDPOINTS.symbol + 'd000.png'}
        alt="sun image"
      />
    </div>
  );
};

export default Loading;
