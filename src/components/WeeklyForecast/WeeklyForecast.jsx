import React, { useState, useEffect } from 'react';
import { getWeeklyForecastById } from '../../api';
import { url } from '../../constants';
import WeeklyForecastItem from '../WeeklyForecastItem/WeeklyForecastItem';
import classes from './WeeklyForecast.module.scss';

const WeeklyForecast = ({ location }) => {
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  useEffect(() => {
    if (location.id) {
      getWeeklyForecastById(url, location.id).then(forecast => setWeeklyForecast(forecast));
    }
  }, [location]);

  return (
    <>
      <h2>Next week</h2>
      <div className={classes.weeklyForecast}>
        {weeklyForecast.map(forecastItem => (
          <WeeklyForecastItem forecastItem={forecastItem} key={forecastItem.date} />
        ))}
      </div>
    </>
  );
};

export default WeeklyForecast;
