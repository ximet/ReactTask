import React, { useState, useEffect } from 'react';
import { WeatherInfo } from '../../components';
import { weatherApi } from '../../utils/api';
import endpoints from '../../Config/endpoints';

const Home = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({
    lon: 5,
    lat: 5
  });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  };

  const showPosition = position => {
    setLocation({ lon: position.coords.longitude, lat: position.coords.latitude });
  };

  const getWeatherData = async () => {
    try {
      const { data } = await weatherApi.get(endpoints.CURRENT_LOCATION(location));
      setData([data.current]);
    } catch (error) {
      console.warn(error);
    }
  };
  console.log(data);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [location]);

  return (
    <div>
      <WeatherInfo data={data} />
    </div>
  );
};

export default Home;
