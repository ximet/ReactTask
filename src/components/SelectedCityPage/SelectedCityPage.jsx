import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import weatherApi from '../../api/weatherApi';

import { WorldWeatherContext } from '../../core/contexts';
import Preloader from '../Preloader/Preloader';
import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';

function SelectedCityPage() {
  const params = useParams();
  const [worldWeather] = useContext(WorldWeatherContext);

  const [locationInfo, setLocationInfo] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [todaysWeather, setTodaysWeather] = useState(null);
  const [nextWeekWeather, setNextWeekWeather] = useState(null);

  useEffect(() => {
    const cityName = params.name.replaceAll('_', ' ');
    const cityData = worldWeather.find((city) => city.name === cityName);
    const location = `${cityData.lon},${cityData.lat}`;

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
