import React, { FC, useEffect, useState } from 'react';
import useGetLocation from 'hooks/useGetLocation';
import '../../styles/globals.scss';
import { createToken, getCurrentWeather, getDailyWeather, getLocation } from 'API/get';
import CurrentWeatherCard from 'components/CurrentWeatherCard';
import { DailyWeather, LocationData, WeatherData } from 'types';
import DailyWeatherCard from 'components/DailyWeatherCard';
import styles from './styles.module.scss';

const Main: FC = () => {
  const { coords, status } = useGetLocation();
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [forecast, setForecast] = useState<DailyWeather[]>([]);

  useEffect(() => {
    const getData = async () => {
      await createToken();
      const data = await getCurrentWeather(coords);
      const locationData = await getLocation(coords);
      const dailyWeather = await getDailyWeather(coords);
      setCurrentWeather(data);
      setLocation(locationData);
      setForecast(dailyWeather);
    };
    if (coords) {
      getData();
    }
  }, [coords]);

  return (
    <main>
      <CurrentWeatherCard weatherData={currentWeather} location={location} status={status} />
      <div className={styles.dailyCardsContainer}>
        <h1 className={styles.dailyHeader}>Daily</h1>
        <div className={styles.dailyCardsBox}>
          {forecast.map((day: DailyWeather) => {
            return <DailyWeatherCard key={day.date} dayWeather={day} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
