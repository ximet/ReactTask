import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.scss';
import commonClasses from '../common.scss';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import { getLocationInfoByCoords, getLocationInfoById } from '../../api';
import { url } from '../../constants';
import DailyForecast from '../../components/DailyForecast/DailyForecast';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';
import { useParams } from 'react-router-dom';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import { useSelector, useDispatch } from 'react-redux';
import { locationSelector } from '../../store/selectors';
import { setLocation } from '../../store/actions';

const MainPage = () => {
  const [coords, setCoords] = useState({});
  // const [location, setLocation] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const location = useSelector(locationSelector);

  useEffect(() => {
    if (params.id) {
      getLocationInfoById(url, params.id).then(location => dispatch(setLocation(location)));
    } else {
      navigator.geolocation.getCurrentPosition(
        pos => {
          setCoords(pos.coords);
        },
        err => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }
      );
    }
  }, [params]);

  useEffect(() => {
    getLocationInfoByCoords(url, coords).then(location => {
      if (location) {
        dispatch(setLocation(location));
      }
    });
  }, [coords]);

  return (
    <>
      <main className={`${commonClasses.page} ${classes.main}`}>
        <ThemeSwitcher />
        <LocationHeader name={location.name} country={location.country} />
        <CurrentWeather location={location} />
        <DailyForecast location={location} />
        <WeeklyForecast location={location} />
      </main>
    </>
  );
};

export default MainPage;
