import styles from './Main.css';
import commonStyle from '../../styles/commonStyles.css';
import React from 'react';

import { FC } from 'react';

interface MainProps {
  positionData: {
    latitude?: number;
    longitude?: number;
  };
  positionError?: string | null;
}

const Main: FC<MainProps> = ({ positionData: { latitude, longitude }, positionError }) => {
  return (
    <main className={commonStyle.container}>
      {positionError ? (
        <p>{positionError}</p>
      ) : (
        <p>
          Your position: {latitude}/{longitude}
        </p>
      )}
    </main>
  );
};

export default Main;
