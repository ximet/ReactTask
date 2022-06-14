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
    if (!location) return;

    try {
      const { data } = await weatherAPI.get(endpoints.CURRENT_LOCATION(location));
      setData([data.current]);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleToken = async () => {
    if (!Cookie.getToken()) {
      const res = await getTokenFromAPI();
      return Cookie.setToken(res);
    }
  };

  useEffect(() => {
    getLocation(setLocation);
    handleToken();
  }, []);

  useEffect(() => {
    getWeather();
  }, [location]);

  if (location)
    return (
      <>
        <Currentweather data={data} />{' '}
      </>
    );
  return <p>Allow location in browser</p>;
};

export default Home;
