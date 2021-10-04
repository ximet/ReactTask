import React from 'react';

import { dataService } from '../../services/dataService';

class WeatherForecast extends React.Component {
  render() {
    return <div>Main content</div>;
  }

  componentDidMount() {
    // dataService.getForecastToken().then((token) => {
    //   console.log(token);
    // });
  }
}

export default WeatherForecast;
