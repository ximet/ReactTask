import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.scss';
import commonClasses from '../common.scss';
import CurrentWeather from '../../components/CurrentWeather';
import { getLocationInfoByCoords } from '../../api';
import { url } from '../../constants';

const MainPage = ({ token }) => {
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

    // setLocation()
  }, []);

  useEffect(() => {
    if (token) {
      getLocationInfoByCoords(url, token, coords).then(location => setLocation(location));
    }
  }, [coords, token]);

  return (
    <main className={`${commonClasses.page} ${classes.main}`}>
      <CurrentWeather token={token} location={location} />
    </main>
  );
};

export default MainPage;
