import React from 'react';
import classes from './extraCityForecast.module.css'

function ExtraCityForecast({ weather }) {
  return (
    <div className={classes.container}>
      <span className={classes.weatherItem}>{`wind ${weather.wind}m/h`}</span>
      <span className={classes.weatherItem}>{`humidity ${weather.humidity}%`}</span>
      <span className={classes.weatherItem}>{`feels like ${weather.feels}°C`}</span>
      <span className={classes.weatherItem}>{`pressure ${weather.pressure}mm`}</span>
    </div>
  )
}

export default ExtraCityForecast;
