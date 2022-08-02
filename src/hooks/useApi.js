import { useEffect, useState } from 'react';
import { findMyLocation } from '../Helpers/functions';
import { endpoints } from '../Helpers/constants';
import { requestToken, instance } from '../DataService/apiService';
import { COOKIE } from '../DataService/cookieService';
import axios from 'axios';

function useApi() {
  const [currWeather, setCurrWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [coords, setCoords] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getReq() {
    if (!coords) {
      return;
    }
    setIsLoading(true);
    await axios
      .all([
        instance.get(endpoints.CURR_WEATHER_BY_COORDS(coords)),
        instance.get(endpoints.DAILY_WEATHER(coords)),
        instance.get(endpoints.HOURLY_WEATHER(coords)),
        instance.get(endpoints.LOCATION_DATA_BY_COORDS(coords))
      ])
      .then(
        axios.spread((...res) => {
          setCurrWeather(res[0].data);
          setDailyWeather(res[1].data);
          setHourlyWeather(res[2].data);
          setLocationData(res[3].data);
          setIsLoading(false);
          setError(null);
        })
      )
      .catch((error) => {
        setError(error);
      });
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
    getReq();
  }, [coords]);

  return { locationData, currWeather, dailyWeather, hourlyWeather, setCoords, isLoading, error };
}

export default useApi;
