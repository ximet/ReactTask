import React from 'react';
import PropTypes from 'prop-types';
import {
  getDayOfTheWeekName,
  getDateTime,
} from './utils/dateUtils';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.cityNames = ['London', 'Paris'];
    this.API_KEY = '93efa8c6110e0bdb32cfde9d07f25e19';

    this.state = {
      weather: null,
      errorMessage: '',
    };
  }

  componentDidMount() {
    new Promise((resolve) => navigator.geolocation.getCurrentPosition(resolve))
      .then(({ coords: { latitude, longitude } }) => (
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${this.API_KEY}`)
      ))
      .then((resp) => resp.json()).then(async (weather) => {
        const country = await fetch(`https://restcountries.eu/rest/v2/alpha/${weather.sys.country}`).then((resp) => resp.json());
        const today = new Date();
        const time = `${getDayOfTheWeekName(today)} ${getDateTime(today)}`;
        const description = `${weather.weather[0].description.charAt(0).toUpperCase()}${weather.weather[0].description.slice(1)}`;
        this.setState({
          weather: {
            ...weather,
            ...weather[0],
            description,
            countryName: country.name,
            time,
          },
        });
      })
      .catch((err) => this.setState({ errorMessage: err.message }));
  }

  render() {
    const { weather, errorMessage } = this.state;
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
    ) : <></>;
    return (
      <div>
        <span style={{ backgroundColor: 'red' }}>{errorMessage}</span>
        {weatherW}
      </div>
    );
  }
}


const WeatherWidget = ({
  description, temperature, pressure, humidity, windSpeed, iconUrl, time, name,
}) => (
  <div style={{ display: 'grid', justifyContent: 'center' }}>
    <div>{time}</div>
    <div>{name}</div>
    <div style={{ display: 'grid', gridAutoFlow: 'column', justifyContent: 'start' }}>
      <img src={iconUrl} alt="картинка погоды" />
      <div>
        <div>{`${Math.floor(temperature - 273)} °C ${description}`}</div>
        <div>{`Pressue: ${pressure * 100} Pa`}</div>
        <div>{`Humidity: ${humidity} %`}</div>
        <div>{`Wind: ${windSpeed} km/h`}</div>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>

    </div>
    <div>
    </div>
  </div>
);

WeatherWidget.propTypes = {
  temperature: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  iconUrl: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
