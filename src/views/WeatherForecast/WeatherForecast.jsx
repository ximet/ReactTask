import React from 'react';

import { dataService } from '../../services/dataService';
import styles from './WeatherForecast.module.scss';

import CurrentCityForecast from '../../layouts/CurrentCityForecast/CurrentCityForecast';
import DetailedForecast from '../../layouts/DetailedForecast/DetailedForecast';

class WeatherForecast extends React.Component {
  componentDidMount() {
    dataService.getForecastToken();
  }

  render() {
    return (
      <div className={styles.weatherForecast}>
        <DetailedForecast />
        <CurrentCityForecast />
      </div>
    );
  }
}

export default WeatherForecast;
