import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './CurrentDate.module.scss';
import { FORECAST_PATHS } from '../../constants/forecaApi';
import { updatingDateInterval } from '../../constants/date';
import { getFormattedCurrentDate } from '../../utils/getFormattedDate';
import { getCurrentTimeZone } from '../../redux/selectors/locationSelectors';

function CurrentDate({ weatherImg, timeZone }) {
  const [currentDate, setCurrentDate] = useState(getFormattedCurrentDate(timeZone));

  useEffect(() => {
    let timerId = setInterval(() => {
      changeTime();
    }, updatingDateInterval);

    return () => {
      clearInterval(timerId);
    };
  });

  function changeTime() {
    const currentDate = getFormattedCurrentDate(timeZone);
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

CurrentDate.defaultProps = {
  timeZone: 'Europe/Minsk'
};

CurrentDate.propTypes = {
  weatherImg: PropTypes.string.isRequired,
  timeZone: PropTypes.string
};

const mapStateToProps = state => ({
  timeZone: getCurrentTimeZone(state)
});

export default connect(mapStateToProps)(CurrentDate);
