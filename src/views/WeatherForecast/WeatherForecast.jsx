import React from 'react';

import styles from './WeatherForecast.module.scss';

import CurrentCityForecast from '../../layouts/Main/CurrentCityForecast/CurrentCityForecast';
import DetailedForecast from '../../layouts/Main/DetailedForecast/DetailedForecast';

function WeatherForecast() {
  return (
    <div className={styles.weatherForecast}>
      <DetailedForecast />
      <CurrentCityForecast />
    </div>
  );
}

export default WeatherForecast;
