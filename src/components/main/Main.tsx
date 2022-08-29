import styles from './Main.css';
import commonStyle from '../../styles/commonStyles.css';

import React, { FC } from 'react';
import { usePosition } from 'hooks/usePosition';

interface MainProps {
  positionData: {
    latitude?: number;
    longitude?: number;
  };
  positionError?: string | null;
}

const Main: FC = () => {
  const { position, error } = usePosition();

  return (
    <main className={commonStyle.container}>
      {position ? (
        <p>
          Your position: {position.latitude}/{position.longitude}
        </p>
      ) : (
        <p>{error}</p>
      )}
    </main>
  );
};

export default Main;
