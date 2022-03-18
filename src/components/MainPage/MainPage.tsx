import React, { useEffect, useState } from 'react';

import weatherApi from '../../api/weatherApi';
import useRequest from '../../hooks/useRequest';
import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import {
  CurrentWeatherinterface,
  LocationInfoInterface,
  NextWeekWeatherItemInterface,
  TodaysWeatherItemInterface,
} from '../../interfaces/interfaces';

import './MainPage.scss';

function MainPage() {
  const [location, setLocation] = useState<string | null>(null);
  const [locationInfo, locationInfoError] = useRequest<LocationInfoInterface>(weatherApi.getLocationInfo, location);
  const [currentWeather, currentWeatherError] = useRequest<CurrentWeatherinterface>(weatherApi.getCurrentWeather, location);
  const [todaysWeather, todaysWeatherError] = useRequest<TodaysWeatherItemInterface[]>(weatherApi.getTodaysWeather, location);
  const [dailyWeather, dailyWeatherError] = useRequest<NextWeekWeatherItemInterface[]>(weatherApi.getNextWeekWeather, location);

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
