import React from 'react';

import styles from './CityForecast.module.scss';

import CurrentDate from '../../components/CurrentDate/CurrentDate';
import TemperatureUniteToggle from './TemperatureUniteToggle/TemperatureUniteToggle';

function CityForecast({ hourlyCityForecast, dailyCityForecast }) {

  console.log(hourlyCityForecast);
  return (
    <div className={styles.cityForecast}>
      <div className={styles.cityForecastWrapper}>
        <CurrentDate />
        <div className={styles.cityTemperature}>
          <span className={styles.cityTemperatureDegrees}>20</span>
          <TemperatureUniteToggle />
        </div>
        <span className={styles.cityTemperatureDescription}>Sunny</span>
        <span className={styles.cityLocation}>Minsk, Belarus</span>
      </div>
    </div>
  );
}

export default CityForecast;