import React from 'react';
import WeatherSymbol from '../WeatherSymbol/WeatherSymbol';
import classes from './WeeklyForecastItem.module.scss';
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  FaCloudRain,
  FaWind,
  FaCompass
} from 'react-icons/fa';

const WeeklyForecastItem = ({ forecastItem }) => {
  const date = new Date(forecastItem.date);
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', options);

  return (
    <div className={classes.weeklyForecastItem}>
      <h2 className={classes.weeklyForecastItem__header}>{dateString}</h2>
      <div className={classes.weeklyForecastItem__info}>
        <div className={classes.infoPiece}>
          <WeatherSymbol symbol={forecastItem.symbol ?? 'n400'} />
        </div>
        <div className={classes.infoPiece}>
          <FaTemperatureHigh />
          <span className={classes.infoPiece__text}>{`${forecastItem.maxTemp}°C`}</span>
        </div>
        <div className={classes.infoPiece}>
          <FaTemperatureLow />
          <span className={classes.infoPiece__text}>{`${forecastItem.minTemp}°C`}</span>
        </div>
        <div className={classes.infoPiece}>
          <FaCloudRain />
          <span className={classes.infoPiece__text}>{`${forecastItem.precipAccum}mm`}</span>
        </div>
        <div className={classes.infoPiece}>
          <FaWind />
          <span className={classes.infoPiece__text}>{`${forecastItem.maxWindSpeed}m/s`}</span>
        </div>
        <div className={classes.infoPiece}>
          <FaCompass />
          <span className={classes.infoPiece__text}>{`${forecastItem.windDir}°`}</span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecastItem;
