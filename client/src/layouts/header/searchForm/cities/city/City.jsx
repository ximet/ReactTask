import React from 'react';
import classes from './city.module.css';
import nightCloudyWeatherIcon from '../../../../../../public/images/nightCloudyWeatherIcon.png';

function City({ city }) {
  return (
    <div className={classes.container}>
      <div className={classes.cityWeatherIconAndCity}>
        <img src={nightCloudyWeatherIcon} className={classes.cityWeatherIcon} />
        <span>{city.name}</span>
      </div>
      <span>{city.temperature}°C</span>
    </div>
  );
}

export default City;
