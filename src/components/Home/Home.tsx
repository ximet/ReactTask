import React, { useEffect, useState } from 'react';
import { getMultipleData, URL } from '../../helpers/api';
import { getUserLocation } from '../../helpers/geolocation';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecast from './DailyForecast/DailyForecast';
import Search from './Search/Search';

const Home: React.FunctionComponent = () => {
  const [city, setCity] = useState<string>();
  const [currentData, setCurrentData] = useState<string>('current data');
  const [dailyForecastData, setDailyForecastData] = useState<string>('daily forecast');

  useEffect(() => {
    setTimeout(getUserLocation, 50);
    setTimeout(() => {
      const userLocation: string | null = sessionStorage.getItem('userLocation');
      if (userLocation) {
        getMultipleData([URL.locationInfo, URL.current, URL.daily], userLocation).then(data => {
          setCity(data[0].name);
          setCurrentData(JSON.stringify(data[1]));
          setDailyForecastData(JSON.stringify(data[2]));
        });
      }
    }, 60);
  }, []);

  return (
    <div>
      <Search />
      <h2>{city} current weather info</h2>
      <CurrentWeather currentData={currentData} />
      <h2>7 day forecast</h2>
      <DailyForecast dailyForecastData={dailyForecastData} />
    </div>
  );
};

export default Home;
