import React from 'react';

import styles from './WeatherForecast.module.scss';

import CityForecast from '../../layouts/CityForecast/Container';
import DetailedForecast from '../../layouts/DetailedForecast/DetailedForecast';

function WeatherForecast() {
  return (
    <div className={styles.weatherForecast}>
      <DetailedForecast />
      <CityForecast />
    </div>
  );
}

export default WeatherForecast;
