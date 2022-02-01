import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import weatherApi from '../../api/weatherApi';

import './MainPage.scss';

function MainPage({ token }) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [locationInfo, setLocationInfo] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});

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
    <div className="main-page">
      <p className="main-page__text">{`Country: ${locationInfo.country}`}</p>
      <p className="main-page__text">{`City: ${locationInfo.name}`}</p>
      <p className="main-page__text">{`Timezone: ${locationInfo.timezone}`}</p>
      <p className="main-page__text">{`Time: ${currentWeather.time}`}</p>
      <p className="main-page__text">{`Temperature: ${currentWeather.temperature}`}</p>
    </div>
  );
}

MainPage.propTypes = {
  token: PropTypes.string.isRequired,
};

export default MainPage;
