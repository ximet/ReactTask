import React from 'react';
import classes from './CurrentCityForecast.module.css';
import { temperatureUnits } from '../../../globalConsts';
import PropTypes from 'prop-types';
import { getWeatherIcon } from '../../../services/weatherIconService';

function CurrentCityForecast({ location, weather }) {
  const weatherIcon = getWeatherIcon(weather.symbolPhrase);

  return (
    <div className={classes.container}>
      <img className={classes.weatherIcon} src={weatherIcon} alt="weahterIcon" />
      <div className={classes.weather}>
        <span className={`${classes.city} ${classes.weatherItem}`}>{location.name}</span>
        <span
          className={`${classes.temperature} ${classes.weatherItem}`}
        >{`${weather.temperature} ${temperatureUnits}`}</span>
        <span className={`${classes.weatherConditions} ${classes.weatherItem}`}>
          {weather.symbolPhrase}
        </span>
      </div>
    </div>
  );
}

CurrentCityForecast.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  weather: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    symbolPhrase: PropTypes.string.isRequired
  })
};

export default CurrentCityForecast;
