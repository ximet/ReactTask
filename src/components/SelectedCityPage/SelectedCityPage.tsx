import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import weatherApi from '../../api/weatherApi';
import {
  CurrentWeatherinterface,
  LocationInfoInterface,
  NextWeekWeatherItemInterface,
  TodaysWeatherItemInterface,
} from '../../interfaces/interfaces';
import Preloader from '../Preloader/Preloader';
import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';

type ParamsType = {
  id: string;
};

function SelectedCityPage() {
  const params = useParams<ParamsType>();

  const [locationInfo, setLocationInfo] = useState<LocationInfoInterface | null>(null);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherinterface | null>(null);
  const [todaysWeather, setTodaysWeather] = useState<TodaysWeatherItemInterface[] |null>(null);
  const [nextWeekWeather, setNextWeekWeather] = useState<NextWeekWeatherItemInterface[] | null>(null);

  useEffect(() => {
    const cityId = params.id;

    weatherApi.getLocationInfoUsingId(cityId).then((data) => {
      const location = `${data.lon},${data.lat}`;
      setLocationInfo(data);
      weatherApi.getCurrentWeather(location).then(setCurrentWeather);
      weatherApi.getTodaysWeather(location).then(setTodaysWeather);
      weatherApi.getNextWeekWeather(location).then(setNextWeekWeather);
    });
  }, [params]);

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

export default SelectedCityPage;
