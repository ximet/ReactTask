import React, { useEffect, useState } from 'react';

import weatherApi from '../../api/weatherApi';

import './MainPage.scss';

function MainPage() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [token, setToken] = useState(null);
  const [locationInfo, setLocationInfo] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCurrentPosition({ lat, lon });
    });

    weatherApi.getToken(24).then((data) => setToken(data));
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

export default MainPage;
