import React from 'react';
import classes from './CurrentCityForecast.module.css';
import moonWeatherIcon from '../../../../public/images/moonWeatherIcon.png';
import { temperatureUnits } from '../../../globalConsts';
import { CurrentCityForecastWeatherTypes, CurrentCityForecastLocationTypes } from './types';

function CurrentCityForecast({ location, weather }) {
  return (
    <div className={classes.container}>
      <img className={classes.weatherIcon} src={moonWeatherIcon} alt="weahterIcon" />
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
  location: CurrentCityForecastLocationTypes,
  weather: CurrentCityForecastWeatherTypes
};

export default CurrentCityForecast;
