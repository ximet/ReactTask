import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import weatherApi from '../../api/weatherApi';

import Preloader from '../Preloader/Preloader';
import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';
import { worldCitiesInfo } from '../WorldWeatherPage/WorldWeatherPage';

function SelectedCityPage() {
  const params = useParams();

  const [locationInfo, setLocationInfo] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [todaysWeather, setTodaysWeather] = useState(null);
  const [nextWeekWeather, setNextWeekWeather] = useState(null);

  useEffect(() => {
    const cityName = params.name.replaceAll('_', ' ');
    const cityData = worldCitiesInfo.find((city) => city.name === cityName);
    const { location } = cityData;

    weatherApi.getLocationInfo(location)
      .then((data) => setLocationInfo(data));

    weatherApi.getCurrentWeather(location)
      .then((data) => setCurrentWeather(data));

    weatherApi.getTodaysWeather(location)
      .then((data) => setTodaysWeather(data));

    weatherApi.getNextWeekWeather(location)
      .then((data) => setNextWeekWeather(data));
  }, []);

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
