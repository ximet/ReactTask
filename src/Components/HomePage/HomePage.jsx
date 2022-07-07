import { useEffect, useState } from 'react';
import { findMyLocation } from '../../Helpers/functions';
import { endpoints } from '../../Helpers/constants';
import { requestToken, instance } from '../../DataService/dataService';
import { COOKIE } from '../../DataService/cookieService';

import { CurrentForecast, DailyForecast, SearchBar, HourlyForecast } from '../../Components/index';

import styles from './HomePage.module.scss';

function HomePage() {
  const [currWeather, setCurrWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [coords, setCoords] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getCurrentWeatherByCoords() {
    if (!coords) {
      return;
    }
    try {
      setIsLoading(true);
      const { data } = await instance.get(endpoints.CURR_WEATHER_BY_COORDS(coords));
      setCurrWeather(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  async function getDailyWeather() {
    if (!coords) {
      return;
    }
    try {
      setIsLoading(true);
      const { data } = await instance.get(endpoints.DAILY_WEATHER(coords));
      setDailyWeather(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  async function getHourlyWeather() {
    if (!coords) {
      return;
    }
    try {
      setIsLoading(true);
      const { data } = await instance.get(endpoints.HOURLY_WEATHER(coords));
      setHourlyWeather(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  async function getLocationDataByCoords() {
    if (!coords) {
      return;
    }
    try {
      setIsLoading(true);
      let { data } = await instance.get(endpoints.LOCATION_DATA_BY_COORDS(coords));
      setLocationData(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  async function tokenCheck() {
    const token = (await requestToken()) || COOKIE.loadToken();
    if (token) {
      COOKIE.saveToken(token);
    }
  }

  useEffect(async () => {
    await tokenCheck();
    findMyLocation(setCoords);
  }, []);

  useEffect(async () => {
    await getCurrentWeatherByCoords();
    await getLocationDataByCoords();
    await getDailyWeather();
    await getHourlyWeather();
  }, [coords]);

  return (
    <main className={styles.container}>
      <SearchBar coordsStateHandler={setCoords} />
      {locationData && currWeather && (
        <CurrentForecast locationData={locationData} currWeather={currWeather.current} />
      )}
      {hourlyWeather && <HourlyForecast hourlyWeather={hourlyWeather} />}
      {dailyWeather && <DailyForecast dailyWeather={dailyWeather} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </main>
  );
}

export default HomePage;
