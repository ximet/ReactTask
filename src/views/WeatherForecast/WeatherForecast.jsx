import React from 'react';

import { dataService } from '../../services/dataService';

class WeatherForecast extends React.Component {
  render() {
    return <div>Main content</div>;
  }

  componentDidMount() {
    // dataService.getForecastToken().then(() => {
    //   dataService.getWeatherData('Minsk').then(data => {
    //     console.log(data);
    //   });
    // });
  }
}

export default WeatherForecast;
