import { useEffect, useState } from 'react';
import { findMyLocation } from '../Helpers/functions';
import { endpoints } from '../Helpers/constants';
import { requestToken, instance } from '../DataService/apiService';
import { COOKIE } from '../DataService/cookieService';

function useApi() {
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

  useEffect(() => {
    tokenCheck();
    findMyLocation(setCoords);
  }, []);

  useEffect(() => {
    getCurrentWeatherByCoords();
    getLocationDataByCoords();
    getDailyWeather();
    getHourlyWeather();
  }, [coords]);

  return { locationData, currWeather, dailyWeather, hourlyWeather, setCoords, isLoading, error };
}

export default useApi;
