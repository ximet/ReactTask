import React, { FC, useEffect, useState } from 'react';
import useGetLocation from 'hooks/useGetLocation';
import '../../styles/globals.scss';
import { getCurrentWeather, getLocation } from 'API/get';
import CurrentWeatherCard from 'components/CurrentWeatherCard';
import { LocationData, WeatherData } from 'types';

const Main: FC = () => {
  const [coords, isGeolocationAvailable, isGeolocationEnabled] = useGetLocation();
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);

  const getData = async () => {
    const data = await getCurrentWeather({ lon: coords?.longitude, lat: coords?.latitude });
    const locationData = await getLocation({ lon: coords?.longitude, lat: coords?.latitude });
    setCurrentWeather(data);
    setLocation(locationData);
  };

  useEffect(() => {
    if (coords) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  return (
    <main>
      <CurrentWeatherCard
        weatherData={currentWeather}
        location={location}
        isAvailable={isGeolocationAvailable}
        isEnabled={isGeolocationEnabled}
      />
    </main>
  );
};

export default Main;
