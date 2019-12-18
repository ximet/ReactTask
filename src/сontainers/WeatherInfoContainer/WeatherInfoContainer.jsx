import React, { Component } from 'react';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo.jsx';

// eslint-disable-next-line no-unused-vars
const GET_CITY_WEATHER_INFO = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve({
    weatherIcon: {
      source: 'smth',
      alt: 'smth',
    },
    time: new Date(),
    cityName: 'Minsk',
    temperature: '12+',
  }), 1000);
});

class WeatherInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherIcon: {
        source: '-',
        alt: '-',
      },
      time: new Date(),
      cityName: '-',
      temperature: '-',
    };
  }

  componentDidMount() {
    GET_CITY_WEATHER_INFO().then(
      (cityWeatherInfo) => this.setState({ ...cityWeatherInfo }),
    );
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
