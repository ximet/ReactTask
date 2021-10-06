import React from 'react';

import styles from './WeatherForecast.module.scss';
import { dataService } from '../../services/dataService';
import { CURRENT_CITY_ID } from '../../constants/constants';

import CityForecast from '../../layouts/CityForecast/CityForecast';
import DetailedForecast from '../../layouts/DetailedForecast/DetailedForecast';

class WeatherForecast extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cityId: CURRENT_CITY_ID,
      cityForecast: null,
      dailyCityForecast: null,
      hourlyCityForecast: null
    };
  }

  componentDidMount() {
    (async () => {
      try {
        await dataService.getForecastToken();

        const { cityForecast, dailyCityForecast, hourlyCityForecast } =
          await dataService.getFullForecast(this.state.cityId);

        this.setState({ cityForecast, dailyCityForecast, hourlyCityForecast });
      } catch (error) {
        console.log(error);
      }
    })();
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
