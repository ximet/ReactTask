import React from 'react';
import classes from './City.module.css';
import nightCloudyWeatherIcon from '../../../../../../public/images/nightCloudyWeatherIcon.png';

function City({ city, onClickHandle }) {
  return (
    <div className={classes.container} onClick={() => onClickHandle(city)}>
      <div className={classes.cityWeatherIconAndCity}>
        <img src={nightCloudyWeatherIcon} alt="weather icon" className={classes.cityWeatherIcon} />
        <div className={classes.textContent}>
          <span>{city.name}</span>
          <span className={classes.country}>{city.country}</span>
        </div>
      </div>
      <span>{city.temperature}°C</span>
    </div>
  );
}

export default City;
