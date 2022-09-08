import React, { FC, useEffect, useState, useContext } from 'react';
import '../../styles/globals.scss';
import {
  createToken,
  getCurrentWeather,
  getDailyWeather,
  getHourlyWeather,
  getLocation
} from 'API/get';
import CurrentWeatherCard from 'components/CurrentWeatherCard';
import { DailyWeather, HourlyWeather, LocationData, WeatherData } from 'types';
import DailyWeatherCard from 'components/DailyWeatherCard';
import LocationContext from 'contexts/LocationContext';
import HourlyWeatherCard from 'components/HourlyWeatherCard';
import styles from './styles.module.scss';

const Main: FC = () => {
  const { coordinates, statusMsg, setStatusMsg } = useContext(LocationContext);
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | undefined>(undefined);
  const [forecast, setForecast] = useState<DailyWeather[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyWeather[]>([]);

  useEffect(() => {
    setCurrentWeather(null);
    setLocationData(undefined);
    setForecast([]);
    setHourlyForecast([]);
    const getData = async () => {
      await createToken();
      const data = await getCurrentWeather(coordinates);
      const locationResult = await getLocation(coordinates);
      const dailyWeather = await getDailyWeather(coordinates);
      const hourlyWeather = await getHourlyWeather(coordinates);
      setCurrentWeather(data);
      setLocationData(locationResult);
      setForecast(dailyWeather);
      const first24Hours = hourlyWeather.slice(0, 24);
      setHourlyForecast(first24Hours);
    };
    if (coordinates) {
      getData();
    }
  }, [coordinates, statusMsg]);

  const onCardClick = async (date: string) => {
    setHourlyForecast([]);
    const hourlyWeather = await getHourlyWeather(coordinates);
    const newDate = new Date(date);
    const clickedDay = newDate.getDate();
    const todayDay = new Date().getDate();
    const timeframe = (clickedDay - todayDay + 1) * 24 - 24;
    const hoursofTheDay = hourlyWeather.slice(timeframe, timeframe + 24);
    setHourlyForecast(hoursofTheDay);
  };

  return (
    <main>
      <div>{statusMsg}</div>
      {console.log('statusMsg', statusMsg)}
      <CurrentWeatherCard weatherData={currentWeather} location={locationData} status={statusMsg} />
      <div className={styles.dailyCardsContainer}>
        <h1 className={styles.dailyHeader}>Daily</h1>
        <div className={styles.dailyCardsBox}>
          {forecast.map((day: DailyWeather) => {
            return (
              <DailyWeatherCard
                key={day.date}
                dayWeather={day}
                onClick={() => {
                  return onCardClick(day.date);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.hourlyCardsContainer}>
        <h1 className={styles.hourlyHeader}>Hourly</h1>
        <div className={styles.hourlyCardsBox}>
          {hourlyForecast.map((hour: HourlyWeather) => {
            return <HourlyWeatherCard key={hour.time} hourWeather={hour} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
