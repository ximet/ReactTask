import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import weatherApi from '../../api/weatherApi';
import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';

import './MainPage.scss';

import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';

function MainPage({ token }) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [todaysWeather, setTodaysWeather] = useState(null);

  const [nextWeekWeather, setNextWeekWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPos = `${position.coords.longitude},${position.coords.latitude}`;
      setCurrentPosition(currentPos);
    });
  }, []);

  useEffect(() => {
    if (currentPosition && token) {
      weatherApi.getLocationInfo(currentPosition, token)
        .then((data) => setLocationInfo(data));

      weatherApi.getCurrentWeather(currentPosition, token)
        .then((data) => setCurrentWeather(data));

      weatherApi.getTodaysWeather(currentPosition, token)
        .then((data) => setTodaysWeather(data));

      weatherApi.getNextWeekWeather(currentPosition, token)
        .then((data) => setNextWeekWeather(data));
    }
  }, [currentPosition, token]);

  return (
    (locationInfo && currentWeather && todaysWeather && nextWeekWeather)
      ? (
        <SelectedCityInfo
          locationInfo={locationInfo}
          currentWeather={currentWeather}
          todaysWeather={todaysWeather}
          nextWeekWeather={nextWeekWeather}
        />
      )
      : <div>PRELOADER...</div>
  );
}

MainPage.propTypes = {
  token: PropTypes.string.isRequired,
};

export default MainPage;