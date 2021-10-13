import React from 'react';
import PropTypes from 'prop-types';

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

CurrentDate.propTypes = {
  weatherImg: PropTypes.string.isRequired
};

export default CurrentDate;
