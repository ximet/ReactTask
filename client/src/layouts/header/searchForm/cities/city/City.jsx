import React from 'react';
import classes from './city.module.css';
import nightCloudyWeatherIcon from '../../../../../../public/images/nightCloudyWeatherIcon.png';

function City() {
  return (
    <div className={classes.container}>
      <div className={classes.cityWeatherIconAndCity}>
        <img src={nightCloudyWeatherIcon} className={classes.cityWeatherIcon}/>
        <span>Minsk</span>
      </div>
      <span>21°C</span>
    </div>
  );
}

export default City;
