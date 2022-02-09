import React from 'react';
import moment from 'moment';
import classes from './CurrentWeather.module.css';
import weatherSymbols from '../../../public/icons/index';

function CurrentWeather({ locationInfo, currentWeather, currentDate }) {
  const currentHour = moment().format('HH');
  const dayTime = currentHour >= 6 && currentHour < 18 ? 'dayIcons' : 'nightIcons';
  const weatherSymbol = weatherSymbols[dayTime][currentWeather.symbol];

  return (
    <div className={classes.current_weather__wrapper}>
      <div>
        <div className={classes.current_weather__header}>
          <p
            className={classes.current_weather__location}
          >{`${locationInfo.name}, ${locationInfo.country}`}</p>
          <p className={classes.current_weather__text}>{`${currentDate}`}</p>
        </div>

        <div className={classes.current_weather__main}>
          <div>
            <p className={classes.current_weather__temp}>{`${currentWeather.temperature}`}&deg;</p>
          </div>

          <div className={classes.vertical_line} />

          <div className={classes.current_weather__phrase_wrapper}>
            <p className={classes.current_weather__phrase}>{`${currentWeather.symbolPhrase}`}</p>
            <p className={classes.current_weather__text}>
              {`Feels like ${currentWeather.feelsLikeTemp}`}&deg;
            </p>
          </div>
        </div>
      </div>
      <div className={classes.image_wrapper}>
        <img className={classes.image} alt="symbol" src={weatherSymbol} />
      </div>
    </div>
  );
}

export default CurrentWeather;
