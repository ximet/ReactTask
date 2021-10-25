import React from 'react';
import PropTypes from 'prop-types';

import styles from './DailyForecast.module.scss';
import WeatherCard from '../../../components/WeatherCard/WeatherCard';

function DailyForecast({ forecast }) {
  return (
    <div className={styles.dailyForecast}>
      <h2 className={styles.dailyForecastTitle}>Daily Forecast</h2>
      <div className={styles.dailyForecastData}>
        {forecast.map(weatherInfo => (
          <WeatherCard key={weatherInfo.date} weatherInfo={weatherInfo} />
        ))}
      </div>
    </div>
  );
}

DailyForecast.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      maxTemp: PropTypes.number.isRequired,
      maxWindSpeed: PropTypes.number.isRequired,
      minTemp: PropTypes.number.isRequired,
      precipAccum: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired,
      windDir: PropTypes.number.isRequired
    })
  )
};

export default DailyForecast;
