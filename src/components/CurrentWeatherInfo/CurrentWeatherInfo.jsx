import React from 'react';
import classes from './CurrentWeatherInfo.module.scss';

const CurrentWeatherInfo = ({ weather }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.tile}>
        <span>temp:</span>
        <span className={classes.tile__info}>{weather.temperature} °C</span>
      </div>
      <div className={classes.tile}>
        <span>feels like:</span>
        <span className={classes.tile__info}> {weather.feelsLikeTemp} °C</span>
      </div>
      <div className={classes.tile}>
        <span>humidity:</span>
        <span className={classes.tile__info}>{weather.relHumidity}%</span>
      </div>
      <div className={classes.tile}>
        <span>pressure:</span>
        <span className={classes.tile__info}>{weather.pressure} hPa</span>
      </div>
      <div className={classes.tile}>
        <span>wind dir.:</span>
        <span className={classes.tile__info}>{weather.windDirString}</span>
      </div>
      <div className={classes.tile}>
        <span>wind speed:</span>
        <span className={classes.tile__info}>{weather.windSpeed} m/s</span>
      </div>
    </div>
  );
};

export default CurrentWeatherInfo;
