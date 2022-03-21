import React, { useCallback, useEffect, useState } from 'react';
import { getDailyForecastById } from '../../api';
import { url } from '../../constants';
import DailyForecastItem from '../DailyForecastItem/DailyForecastItem';
import classes from './DailyForecast.module.scss';

const DailyForecast = ({ location }) => {
  const [dailyForecast, setDailyForecast] = useState([]);

  const updateDailyForecast = useCallback(async () => {
    if (location.id) {
      const forecast = await getDailyForecastById(url, location.id);

      setDailyForecast(forecast);
    }
  }, [location]);

  useEffect(() => {
    updateDailyForecast();
  }, [updateDailyForecast]);

  return (
    <>
      <h2 className={classes.dailyForecastHeader}>Today</h2>
      <div className={classes.dailyForecast}>
        {dailyForecast.map(forecastItem => (
          <DailyForecastItem forecastItem={forecastItem} key={forecastItem.time} />
        ))}
      </div>
    </>
  );
};

export default DailyForecast;
