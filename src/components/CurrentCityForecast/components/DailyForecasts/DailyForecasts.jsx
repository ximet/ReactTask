import classes from './DailyForecasts.module.scss';
import { v4 as uuidv4 } from 'uuid';
import DailyForecast from './DailyForecast/DailyForecast';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ApiService from '../../../../services/ForecastApiService';

function DailyForecasts({ locationId }) {
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(async () => {
    const { data } = await ApiService.getDailyForecast(locationId);
    setDailyForecast(data.forecast);
  }, [locationId]);

  return (
    <div className={classes.forecastsContainer}>
      {dailyForecast.map(forecast => (
        <DailyForecast key={uuidv4()} forecast={forecast} />
      ))}
    </div>
  );
}

export default DailyForecasts;
