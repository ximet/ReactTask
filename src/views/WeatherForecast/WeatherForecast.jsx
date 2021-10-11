import React from 'react';

import styles from './WeatherForecast.module.scss';
import { dataService } from '../../services/dataService';
import { CURRENT_CITY_ID } from '../../constants/forecaApi';

import CityForecast from '../../layouts/CityForecast/CityForecast';
import DetailedForecast from '../../layouts/DetailedForecast/DetailedForecast';

class WeatherForecast extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDataReturned: false,
      cityId: CURRENT_CITY_ID,
      cityInfo: null,
      cityForecast: null,
      dailyCityForecast: null,
      hourlyCityForecast: null
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      await dataService.getForecastToken();

      const { cityForecast, dailyCityForecast, hourlyCityForecast, cityInfo } =
        await dataService.getFullForecast(this.state.cityId);

      this.setState({
        cityForecast,
        dailyCityForecast,
        hourlyCityForecast,
        cityInfo,
        isDataReturned: true
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.isDataReturned) {
      return (
        <div className={styles.weatherForecast}>
          <DetailedForecast
            hourlyCityForecast={this.state.hourlyCityForecast}
            dailyCityForecast={this.state.dailyCityForecast}
          />
          <CityForecast
            cityForecast={this.state.cityForecast}
            cityInfo={this.state.cityInfo}
            theme={this.props.theme}
          />
        </div>
      );
    } else {
      return 'Loading...';
    }
  }
}

export default WeatherForecast;