import React, { useState, useEffect } from 'react';
import { CurrentWeather } from '../../components';
import { publicApiInstance, getAccessTokenFromAPI } from '../../utils/api';
import { Cookie } from '../../services/cookie';
import endpoints from '../../config/enpoints';
import * as S from './Home.styles';

const Home = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  };

  const showPosition = position => {
    setLocation({ lon: position.coords.longitude, lat: position.coords.latitude });
  };

  const getWeatherData = async () => {
    if (!location) {
      return;
    }
    try {
      const { data } = await publicApiInstance.get(endpoints.GET_CURRENT_LOCATION(location));
      setData([data.current]);
    } catch (error) {
      console.warn(error);
    }
  };

  const tokenHandler = async () => {
    if (!Cookie.getToken()) {
      const res = await getAccessTokenFromAPI();
      return Cookie.setToken(res);
    }
  };

  useEffect(() => {
    tokenHandler();
    getLocation();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [location]);

  return (
    <div>
      {location ? (
        <CurrentWeather data={data} />
      ) : (
        <S.Message>We need to set you location!</S.Message>
      )}
    </div>
  );
};

export default Home;
