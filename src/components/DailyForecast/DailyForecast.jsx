import React from 'react';
import DailyItem from '../../atomic-components/DailyItem/DailyItem';
import classes from './DailyForecast.module.css';
import { getImagesURL } from '../../services/WeatherApi';
import { DAILY_FORECAST } from './mock';

function DailyForecast() {
  const daily = DAILY_FORECAST.map(day => {
    const date = new Date(day.date).toLocaleDateString('en-us', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    const weatherSymbol = getImagesURL(day.symbol);

    return (
      <li key={day.id} className={classes.daily_weather__item}>
        <DailyItem date={date} weatherSymbol={weatherSymbol} day={day} />
      </li>
    );
  });

  return <ul className={classes.daily_weather__wrapper}>{daily}</ul>;
}

export default DailyForecast;
