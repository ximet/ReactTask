import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.scss';
import commonClasses from '../common.scss';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import { getLocationInfoByCoords } from '../../api';
import { url } from '../../constants';
import DailyForecast from '../../components/DailyForecast/DailyForecast';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';

const MainPage = () => {
  const [coords, setCoords] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        setCoords(pos.coords);
      },
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    );
  }, []);

  useEffect(() => {
    getLocationInfoByCoords(url, coords).then(location => {
      if (location) {
        setLocation(location);
      }
    });
  }, [coords]);

  return (
    <>
      <main className={`${commonClasses.page} ${classes.main}`}>
        <LocationHeader name={location.name} country={location.country} />
        <CurrentWeather location={location} />
        <DailyForecast location={location} />
        <WeeklyForecast location={location} />
      </main>
    </>
  );
};

export default MainPage;
