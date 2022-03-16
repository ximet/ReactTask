import React, { useEffect, useState } from 'react';
import { getDailyForecastById } from '../../api';
import { url } from '../../constants';
import DailyForecastItem from '../DailyForecastItem/DailyForecastItem';
import classes from './DailyForecast.module.scss';

const DailyForecast = ({ location }) => {
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    if (location.id) {
      getDailyForecastById(url, location.id).then(forecast => setDailyForecast(forecast));
    }
  }, [location]);

  return (
    <>
      <h2>Today</h2>
      <div className={classes.dailyForecast}>
        {dailyForecast.map(forecastItem => (
          <DailyForecastItem forecastItem={forecastItem} key={forecastItem.time} />
        ))}
      </div>
    </>
  );
};

export default DailyForecast;
