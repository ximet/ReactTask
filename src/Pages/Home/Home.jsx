import { useEffect, useState } from 'react';
import { findMyLocation } from '../../Helpers/functions';
import { endpoints } from '../../Helpers/constants';
import { requestToken, instance } from '../../DataService/dataService';
import { COOKIE } from '../../DataService/cookieService';

import { CurrWeatherCard, DailyWeatherCard, Search } from '../../Components/index';

import styles from './Home.module.scss';

export default function Home() {
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
      setError(error);
    }
  }

  async function getCurrentCity() {}

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
      <Search />
      {locationData && currWeather && dailyWeather && (
        <CurrWeatherCard locationData={locationData} currWeather={currWeather.current} />
      )}
      {dailyWeather && <DailyWeatherCard dailyWeather={dailyWeather} />}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </main>
  );
}
