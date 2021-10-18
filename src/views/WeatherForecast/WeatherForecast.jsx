import React from 'react';
import PropTypes from 'prop-types';

import styles from './WeatherForecast.module.scss';

import CityForecast from '../../layouts/CityForecast/Container';
import DetailedForecast from '../../layouts/DetailedForecast/DetailedForecast';

function WeatherForecast({ dailyCityForecast, hourlyCityForecast, theme }) {
  return (
    <div className={styles.weatherForecast}>
      <DetailedForecast
        hourlyCityForecast={hourlyCityForecast}
        dailyCityForecast={dailyCityForecast}
      />
      <CityForecast theme={theme} />
    </div>
  );
}

export default WeatherForecast;
