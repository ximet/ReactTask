import classes from './weatherPage.scss';
import { useState, useEffect } from 'react';
import DataService from '../../dataService/DataService';

import ForecastCard from '../../components/forecastCard/ForecastCard';

function WeatherPage() {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const detailsKeys = ['cloudiness', 'precipProb', 'relHumidity', 'windSpeed', 'thunderProb'];

  useEffect(async () => {
    const data = await DataService.getCurrentWeather();

    setData(data);
    setIsLoaded(true);
  }, []);

  return isLoaded ? <ForecastCard data={data} detailsKeys={detailsKeys}/> : 'Loading...';
}

export default WeatherPage;
