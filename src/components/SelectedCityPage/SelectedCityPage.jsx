import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import weatherApi from '../../api/weatherApi';

import Preloader from '../Preloader/Preloader';
import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';

function SelectedCityPage() {
  const params = useParams();

  const [locationInfo, setLocationInfo] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [todaysWeather, setTodaysWeather] = useState(null);
  const [nextWeekWeather, setNextWeekWeather] = useState(null);

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
