import React from 'react';
import PropTypes from 'prop-types';

import styles from './WeatherCard.module.scss';
import { FORECAST_PATHS } from '../../constants/forecaApi';
import { getFormattedDate } from '../../utils/getFormattedDate';

function WeatherCard({ weatherInfo }) {
  const date = getFormattedDate(weatherInfo.date);

  return (
    <div className={styles.weatherCard}>
      <img
        src={`${FORECAST_PATHS.getIconUrl}${weatherInfo.symbol}.png`}
        alt="weather icon"
        className={styles.weatherIcon}
      />
      <span className={styles.dayOfWeek}>{date.dayOfWeek}</span>
      <span className={styles.date}>{date.date}</span>

      <div className={styles.addedWeatherInfo}>
        <span className={styles.temperature}>{weatherInfo.maxTemp}</span>
        <span>|</span>
        <span className={styles.temperature}>{weatherInfo.minTemp}</span>
      </div>
    </div>
  );
}

WeatherCard.prototypes = {
  weatherInfo: PropTypes.shape({
    date: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    maxWindSpeed: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    precipAccum: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    windDir: PropTypes.number.isRequired
  })
};

export default WeatherCard;