import classes from './weatherPage.scss';
import { useState, useEffect } from 'react';
import DataService from '../../dataService/DataService';

import ForecastCard from '../../components/forecastCard/ForecastCard';
import DailyForecast from '../../components/dailyForecast/DailyForecast';

const detailsKeys = ['cloudiness', 'precipProb', 'relHumidity', 'windSpeed', 'thunderProb'];

function WeatherPage() {
  const [weatherData, setWeatherData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(async () => {
    const weatherData = await DataService.getCurrentWeather();
    const dailyData = await DataService.getDailyForecast();

    setWeatherData(weatherData);
    setDailyData(dailyData);
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <div className={classes.weatherPage}>
      <ForecastCard weatherData={weatherData} detailsKeys={detailsKeys} />
      <DailyForecast dailyData={dailyData} />
    </div>
  ) : (
    'Loading...'
  );
}

export default WeatherPage;
