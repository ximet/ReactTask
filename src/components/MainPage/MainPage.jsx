import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import weatherApi from '../../api/weatherApi';

import './MainPage.scss';

import SelectedCityInfo from '../SelectedCityInfo/SelectedCityInfo';

function MainPage({ token }) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCurrentPosition({ lat, lon });
    });
  }, []);

  useEffect(() => {
    if (currentPosition && token) {
      weatherApi.getLocationInfo(currentPosition, token)
        .then((data) => setLocationInfo(data));

      weatherApi.getCurrentWeather(currentPosition, token)
        .then((data) => setCurrentWeather(data));
    }
  }, [currentPosition, token]);

  return (
    (locationInfo && currentWeather)
      ? <SelectedCityInfo locationInfo={locationInfo} currentWeather={currentWeather} />
      : <div>PRELOADER...</div>
  );
}

MainPage.propTypes = {
  token: PropTypes.string.isRequired,
};

export default MainPage;
