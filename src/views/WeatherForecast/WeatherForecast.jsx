import React from 'react';
import PropTypes from 'prop-types';

import styles from './WeatherForecast.module.scss';

import CityForecast from '../../layouts/CityForecast/CityForecast';
import DetailedForecast from '../../layouts/DetailedForecast/DetailedForecast';

function WeatherForecast({ cityForecast, dailyCityForecast, hourlyCityForecast, cityInfo, theme }) {
  return (
    <div className={styles.weatherForecast}>
      <DetailedForecast
        hourlyCityForecast={hourlyCityForecast}
        dailyCityForecast={dailyCityForecast}
      />
      <CityForecast cityForecast={cityForecast} cityInfo={cityInfo} theme={theme} />
    </div>
  );
}

export default WeatherForecast;
