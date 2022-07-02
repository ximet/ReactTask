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
  const [coords, setCoords] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getCurrentWeather() {
    if (!coords) {
      return;
    }
    try {
      setIsLoading(true);
      const { data } = await instance.get(endpoints.CURR_WEATHER(coords));
      setCurrWeather(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
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
      setError(error.message);
    }
  }

  async function getLocationData() {
    if (!coords) {
      return;
    }
    try {
      setIsLoading(true);
      let { data } = await instance.get(endpoints.LOCATION_DATA(coords));
      setLocationData(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
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
    await getCurrentWeather();
    await getLocationData();
    await getDailyWeather();
  }, [coords]);

  return (
    <main className={styles.container}>
      <SearchBar />
      {locationData && currWeather && dailyWeather && (
        <CurrentForecast locationData={locationData} currWeather={currWeather.current} />
      )}
      {dailyWeather && <DailyForecast dailyWeather={dailyWeather} />}
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
    </main>
  );
}

export default HomePage;
