import React from 'react';

import styles from './WeatherForecast.module.scss';

import CityForecast from '../../layouts/CityForecast/Container';
import DetailedForecast from '../../layouts/DetailedForecast/DetailedForecast';

function WeatherForecast({ theme }) {
  return (
    <div className={styles.weatherForecast}>
      <DetailedForecast />
      <CityForecast theme={theme} />
    </div>
  );
}

export default WeatherForecast;
