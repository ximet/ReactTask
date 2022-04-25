import React, { useState, useEffect } from 'react';
import { CurrentWeather } from '../../components';
import { publicApiInstance } from '../../utils/api';
import endpoints from '../../config/enpoints';

const Home = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({
    lon: 25.2657137,
    lat: 54.7569713
  });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  };

  const showPosition = position => {
    setLocation({ lon: position.coords.longitude, lat: position.coords.latitude });
  };

  const getWeatherData = async () => {
    try {
      const { data } = await publicApiInstance.get(endpoints.GET_CURRENT_LOCATION(location));
      setData([data.current]);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [location]);

  return (
    <div>
      <CurrentWeather data={data} />
    </div>
  );
};

export default Home;
