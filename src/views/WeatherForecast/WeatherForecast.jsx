import React from 'react';

import styles from './WeatherForecast.module.scss';
import { dataService } from '../../services/dataService';
import { CURRENT_CITY_ID } from '../../constants/constants';

import CityForecast from '../../layouts/CityForecast/CityForecast';
import DetailedForecast from '../../layouts/DetailedForecast/DetailedForecast';

class WeatherForecast extends React.Component {
  constructor() {
    super();
    this.state = {
      cityId: CURRENT_CITY_ID,
      cityForecast: null,
      dailyCityForecast: null,
      hourlyCityForecast: null
    };
  }

  componentDidMount() {
    dataService
      .getForecastToken()
      .then(() => {
        return dataService.getDaylyForecast(this.state.cityId);
      })
      .then(data => {
        const { forecast } = data;
        const todayForecast = forecast[1];

        this.setState({ dailyCityForecast: forecast, cityForecast: todayForecast });
      })
      .then(() => {
        return dataService.getHourlyForecast(this.state.cityId);
      })
      .then(data => {
        const { forecast } = data;

        this.setState({ hourlyCityForecast: forecast });
      });
  }

  render() {
    return (
      <div className={styles.weatherForecast}>
        <DetailedForecast cityForecast={this.state.cityForecast} />
        <CityForecast
          hourlyCityForecast={this.state.hourlyCityForecast}
          dailyCityForecast={this.state.dailyCityForecast}
        />
      </div>
    );
  }
}

export default WeatherForecast;
