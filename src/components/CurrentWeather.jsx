import React, { useEffect, useState } from 'react';
import { getCurrentWeatherByCoords, getCurrentWeatherById } from '../api';
import { url } from '../constants';

const CurrentWeather = ({ token, locationId, coords, title }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (locationId) {
      getCurrentWeatherById(url, token, locationId).then(currentWeather =>
        setWeather(currentWeather)
      );
    }
  }, [locationId]);

  useEffect(() => {
    if (!coords) {
      return;
    }

    const isLocationValid = Boolean(coords.longitude && coords.latitude);

    if (isLocationValid && token) {
      getCurrentWeatherByCoords(url, token, coords).then(currentWeather =>
        setWeather(currentWeather)
      );
    }
  }, [coords, token]);

  return (
    <div>
      <h2>{title}</h2>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </div>
  );
};

export default CurrentWeather;
