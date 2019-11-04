import React from 'react';

import Button from './Button';
import WeatherWidget from './WeatherWidget';
import { getWeatherByGeolocation } from './services/weatherService';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.cityNames = ['London', 'Paris'];

    this.state = {
      weather: null,
      errorMessage: '',
    };
  }

  componentDidMount() {
    new Promise((resolve) => navigator.geolocation.getCurrentPosition(resolve))
      .then(getWeatherByGeolocation)
      .then((weather) => this.setState({ weather }))
      .catch((e) => this.setState({ errorMessage: e.message }));
  }

  render() {
    const { weather, clicked, errorMessage } = this.state;
    const weatherW = weather ? (
      <WeatherWidget
        name={`${weather.name}, ${weather.countryName}`}
        temperature={weather.main.temp}
        pressure={weather.main.pressure}
        humidity={weather.main.humidity}
        windSpeed={weather.wind.speed}
        iconUrl={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        time={weather.time}
        description={weather.description}
      />
    ) : (
      <></>
    );

    const ext = clicked ? <div>Clicked</div> : <></>;
    return (
      <div
        style={{
          display: 'grid',
          alignContent: 'center',
          justifyContent: 'center',
          gridArea: 'main',
        }}
      >
        {errorMessage && <span style={{ backgroundColor: 'red' }}>{errorMessage}</span>}
        {weatherW}
        <Button style={{ justifySelf: 'end' }} onClick={() => this.setState({ clicked: true })}>
          More...
        </Button>
        {ext}
      </div>
    );
  }
}
