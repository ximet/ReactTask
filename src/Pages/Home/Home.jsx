import { useEffect, useState } from 'react';
import findMyLocation from '../../Helpers/geolocation';
import endpoints from '../../Helpers/endpoints';
import { requestToken, instance } from '../../DataService/dataService';
import { COOKIE } from '../../DataService/cookieService';
import { CurrWeatherCard } from '../../Components';

import styles from './Home.module.scss';

export default function Home() {
  const [currWeather, setCurrWeather] = useState(null);
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
      setCurrWeather(JSON.parse(data));
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
      setLocationData(JSON.parse(data));
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
    await getCurrentWeather();
    await getLocationData();
  }, [coords]);

  return (
    <div className={styles.container}>
      {locationData && currWeather && (
        <CurrWeatherCard locationData={locationData} currWeather={currWeather} />
      )}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
