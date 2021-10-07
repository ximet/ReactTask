import React from 'react';

import styles from './CurrentDate.module.scss';
import { FORECAST_PATHS } from '../../constants/forecaApi';

function CurrentDate({ weatherImg }) {
  return (
    <div className={styles.currentDate}>
      <img
        src={`${FORECAST_PATHS.getIconUrl}${weatherImg}.png`}
        alt="weather icon"
        className={styles.weatherIcon}
      />
      <div className={styles.dateInfo}>
        <span className={styles.time}>12:44 PM</span>
        <span className={styles.date}>Fri, 21 Sep</span>
      </div>
    </div>
  );
}

export default CurrentDate;
