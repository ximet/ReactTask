import React, { useState, useEffect } from 'react';

import {
  getCurrentWeatherInfo,
  getHourlyWeatherInfo,
  getDailyWeatherInfo,
  getToken,
  weatherAPI
} from './API/api';

import getLocation from './Utils/geoLocator';

import endpoints from './Utils/endpoints';
import Currentweather from './Components/Card';

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);

  const getWeather = async () => {
    if (!location) {
      return;
    }
    try {
      const { data } = await weatherAPI.get(endpoints.CURRENT_LOCATION(location));
      setData([data.current]);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getLocation(setLocation);
  }, []);

  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <div>
      {location ? <Currentweather data={data} /> : <p>Allow location</p>}
    </div>
  );
}

export default App;
