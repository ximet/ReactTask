import { useState, useEffect } from 'react';
import PropTypes, { func } from 'prop-types';

import styles from './CurrentDate.module.scss';
import { FORECAST_PATHS } from '../../constants/forecaApi';
import { getFormattedDate } from '../../utils/getFormattedDate';

function CurrentDate({ weatherImg }) {
  const [currentDate, setCurrentDate] = useState(getFormattedDate);

  useEffect(() => {
    let timerId = setInterval(() => {
      changeTime();
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  function changeTime() {
    const currentDate = getFormattedDate();
    setCurrentDate(currentDate);
  }

  return (
    <div className={styles.currentDate}>
      <img
        src={`${FORECAST_PATHS.getIconUrl}${weatherImg}.png`}
        alt="weather icon"
        className={styles.weatherIcon}
      />
      <div className={styles.dateInfo}>
        <span className={styles.time}>{currentDate.time}</span>
        <span className={styles.date}>{currentDate.date}</span>
      </div>
    </div>
  );
}

CurrentDate.propTypes = {
  weatherImg: PropTypes.string.isRequired
};

export default CurrentDate;
