import React, { useEffect, useState } from 'react';

import weatherApi from '../../api/weatherApi';
import useRequest from '../../hooks/useRequest';
import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';

import './MainPage.scss';

function MainPage() {
  const [location, setLocation] = useState(null);
  const [locationInfo, locationInfoError] = useRequest(weatherApi.getLocationInfo, location);
  const [currentWeather, currentWeatherError] = useRequest(weatherApi.getCurrentWeather, location);
  const [todaysWeather, todaysWeatherError] = useRequest(weatherApi.getTodaysWeather, location);
  const [dailyWeather, dailyWeatherError] = useRequest(weatherApi.getNextWeekWeather, location);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPos = `${position.coords.longitude},${position.coords.latitude}`;
      setLocation(currentPos);
    });
  }, []);

  return (
    (locationInfo && currentWeather && todaysWeather && dailyWeather)
      ? (
        <SelectedCityInfo
          locationInfo={locationInfo}
          currentWeather={currentWeather}
          todaysWeather={todaysWeather}
          nextWeekWeather={dailyWeather}
        />
      )
      : (locationInfoError || currentWeatherError || todaysWeatherError || dailyWeatherError)
        ? (
          <Error errors={[
            locationInfoError,
            currentWeatherError,
            todaysWeatherError,
            dailyWeatherError]}
          />
        )
        : <Preloader />
  );
}

export default MainPage;
