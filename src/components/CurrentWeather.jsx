import React, { useEffect, useState } from 'react';
import { getCurrentWeatherById } from '../api';
import { url } from '../constants';

const CurrentWeather = ({ token, locationId }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getCurrentWeatherById(url, token, locationId).then(currentWeather =>
      setWeather(currentWeather)
    );
  }, [locationId]);

  return (
    <div>
      <h2>Current Weather</h2>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </div>
  );
};

export default CurrentWeather;
