import React from 'react';

import { dataService } from '../../services/dataService';

class WeatherForecast extends React.Component {
  render() {
    return <div>Weather Forecast content</div>;
  }

  componentDidMount() {
    dataService.getForecastToken();
  }
}

export default WeatherForecast;
