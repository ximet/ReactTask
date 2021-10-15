import React from 'react';
import classes from './CurrentCityForecast.module.css';
import moonWeatherIcon from '../../../../public/images/moonWeatherIcon.png';

function CurrentCityForecast({ location, weather }) {
  return (
    <div className={classes.container}>
      <img className={classes.weatherIcon} src={moonWeatherIcon} alt="weahterIcon" />
      <div className={classes.weather}>
        <span className={`${classes.city} ${classes.weatherItem}`}>{location.name}</span>
        <span
          className={`${classes.temperature} ${classes.weatherItem}`}
        >{`${weather.temperature} °C`}</span>
        <span className={`${classes.weatherConditions} ${classes.weatherItem}`}>
          {weather.symbolPhrase}
        </span>
      </div>
    </div>
  );
}

export default CurrentCityForecast;
