import React, { useEffect, useState } from 'react';
import { getCurrentWeatherByCoords, getCurrentWeatherById } from '../api';
import { url } from '../constants';

const CurrentWeather = ({ token, locationId, coords, title }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getCurrentWeatherById(url, token, locationId).then(currentWeather =>
      setWeather(currentWeather)
    );
  }, [locationId]);

  useEffect(() => {
    getCurrentWeatherByCoords(url, token, coords).then(currentWeather =>
      setWeather(currentWeather)
    );
  }, [coords]);

  return (
    <div>
      <h2>{title}</h2>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </div>
  );
};

export default CurrentWeather;
