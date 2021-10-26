import React from 'react';
import PropTypes from 'prop-types';

import styles from './DailyForecast.module.scss';
import Slider from '../../../components/Slider/Slider';
import { dailyForecastSliderOptions } from '../../../constants/slider';

function DailyForecast({ forecast }) {
  return (
    <div className={styles.dailyForecast}>
      <h2 className={styles.dailyForecastTitle}>Daily Forecast</h2>
      <div className={styles.dailyForecastData}>
        <Slider slides={forecast} {...dailyForecastSliderOptions} />
      </div>
    </div>
  );
}

DailyForecast.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      slide: PropTypes.element.isRequired
    })
  )
};

export default DailyForecast;
