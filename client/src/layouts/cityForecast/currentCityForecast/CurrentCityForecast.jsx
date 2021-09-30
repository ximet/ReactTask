import React from 'react';
import classes from './currentCityForecast.module.css'
import moonWeatherIcon from '../../../../public/images/moonWeatherIcon.png';

function CurrentCityForecast({ currentCityData }) {
  return (
    <div className={classes.container}>
      <img className={classes.weatherIcon} src={moonWeatherIcon} alt="weahterIcon"/>
      <div className={classes.weather}>
        <span className={`${classes.city} ${classes.weatherItem}`}>{currentCityData.city}</span>
        <span className={`${classes.temperature} ${classes.weatherItem}`}>{`${currentCityData.temperature} °C`}</span>
        <span className={`${classes.weatherConditions} ${classes.weatherItem}`}>{currentCityData.conditions}</span>
      </div>
    </div>
  )
}

export default CurrentCityForecast;
