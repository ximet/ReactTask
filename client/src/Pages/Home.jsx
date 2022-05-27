import React, { useState, useEffect } from 'react';

import { weatherAPI, getTokenFromAPI } from '../API/api';
import { Cookie } from '../Utils/CookieHandler';

import getLocation from '../Utils/geoLocator';

import endpoints from '../Utils/endpoints';
import Currentweather from '../Components/Card/Card';

const Home = () => {
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

  useEffect(async () => {
    const token = Cookie.getToken() || (await getTokenFromAPI());
    if (token) {
      Cookie.setToken(token);
    }
  }, []);

  useEffect(() => {
    getLocation(setLocation);
  }, []);

  useEffect(() => {
    getWeather();
  }, [location]);

  return <div>{location ? <Currentweather data={data} /> : <p>Allow location in browser</p>}</div>;
};

export default Home;
