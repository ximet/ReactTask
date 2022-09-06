import {
  createToken,
  getCurrentWeather,
  getDailyWeather,
  getHourlyWeather,
  getLocation,
  getLocationByQuery
} from 'API/get';
import LocationContext from 'contexts/LocationContext';
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DailyWeather, LocationData, WeatherData, HourlyWeather } from 'types';
import CurrentWeatherCard from 'components/CurrentWeatherCard';
import DailyWeatherCard from 'components/DailyWeatherCard';
import styles from './styles.module.scss';
import '../../styles/globals.scss';

type LocationParams = {
  location: string | undefined;
};

const Details: React.FC = () => {
  const { location } = useParams<LocationParams>();
  const { coordinates, statusMsg } = useContext(LocationContext);

  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | undefined>(undefined);
  const [forecast, setForecast] = useState<DailyWeather[]>([]);
  const [hourlyFforecast, setHourlyForecast] = useState<HourlyWeather[]>([]);

  useEffect(() => {
    setCurrentWeather(null);
    setLocationData(undefined);
    setForecast([]);
    const getData = async () => {
      await createToken();
      const data = await getCurrentWeather(coordinates);
      const locationResult = await getLocationByQuery(location);
      const dailyWeather = await getDailyWeather(coordinates);
      setCurrentWeather(data);
      setLocationData(locationResult.locations[0]);
      setForecast(dailyWeather);
    };
    if (coordinates) {
      getData();
    }
  }, [coordinates, location]);

  const onCardClick = async () => {
    const hourlyWeather = await getHourlyWeather(coordinates);
    setHourlyForecast(hourlyWeather);
  };

  return (
    <main>
      <CurrentWeatherCard weatherData={currentWeather} location={locationData} status={statusMsg} />
      <div className={styles.dailyCardsContainer}>
        <h1 className={styles.dailyHeader}>Daily</h1>
        <div className={styles.dailyCardsBox}>
          {forecast.map((day: DailyWeather) => {
            return <DailyWeatherCard key={day.date} dayWeather={day} onClick={onCardClick} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Details;
