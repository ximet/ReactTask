import React, { useEffect, useState } from 'react';

import weatherApi from '../../api/weatherApi';
import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';
import Preloader from '../Preloader/Preloader';

import './MainPage.scss';

function MainPage() {
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
    if (currentPosition) {
      weatherApi.getLocationInfo(currentPosition).then(setLocationInfo);
      weatherApi.getCurrentWeather(currentPosition).then(setCurrentWeather);
      weatherApi.getTodaysWeather(currentPosition).then(setTodaysWeather);
      weatherApi.getNextWeekWeather(currentPosition).then(setNextWeekWeather);
    }
  }, [currentPosition]);

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
      : <Preloader />
  );
}

export default MainPage;
