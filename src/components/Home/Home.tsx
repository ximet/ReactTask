import { string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getMultipleData, URL } from '../../helpers/api';
import { getUserLocation } from '../../helpers/geolocation';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecast from './DailyForecast/DailyForecast';
import { CurrentData, ForecastData, LocationInfo } from './homeInterfaces';
import Search from './Search/Search';

const Home: React.FunctionComponent = () => {
  const [city, setCity] = useState<string>();
  const [currentData, setCurrentData] = useState<CurrentData>();
  const [dailyForecastData, setDailyForecastData] = useState<ForecastData>();

  useEffect(() => {
    setTimeout(getUserLocation, 50);
    setTimeout(() => {
      const userLocation: string | null = sessionStorage.getItem('userLocation');
      if (userLocation) {
        getMultipleData([URL.locationInfo, URL.current, URL.daily], userLocation).then(data => {
          const locationInfo: LocationInfo = data[0];
          const current: CurrentData = data[1];
          const daily: ForecastData = data[2];
          setCity(locationInfo.name);
          setCurrentData(current);
          setDailyForecastData(daily);
        });
      }
    }, 60);
  }, []);

  return (
    <div>
      <Search />
      <h2>{city} current weather info</h2>
      <CurrentWeather currentData={JSON.stringify(currentData)} />
      <h2>7 day forecast</h2>
      <DailyForecast dailyForecastData={JSON.stringify(dailyForecastData)} />
    </div>
  );
};

export default Home;
