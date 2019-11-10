import React, { Component } from 'react';
import WeatherInfo from '../weatherInfo/weatherInfo.jsx';

class WeatherInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherIcon: {
        source: 'smth',
        alt: 'smth',
      },
      time: new Date(),
      cityName: 'Minsk',
      temperature: '12+',
    };
  }

  render() {
    const {
      weatherIcon, time, cityName, temperature,
    } = this.state;
    return (
      <WeatherInfo
        cityName={cityName}
        weatherIcon={weatherIcon}
        time={time}
        temperature={temperature} />
    );
  }
}

export default WeatherInfoContainer;
