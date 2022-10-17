import LocationContext from 'contexts/LocationContext';
import { useState, useEffect, useCallback, useContext } from 'react';
import { DailyWeather, HourlyWeather, LocationData, CurrentWeatherData } from 'types';

const useGetData = ({ getCurrentWeather, getDailyWeather, getHourlyWeather, getLocation }) => {
  const { coordinates } = useContext(LocationContext);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | undefined>(undefined);
  const [forecast, setForecast] = useState<DailyWeather[] | undefined>([]);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyWeather[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const getData = useCallback(async () => {
    try {
      const data = await getCurrentWeather(coordinates);
      const locationResult = await getLocation(coordinates);
      const dailyWeather = await getDailyWeather(coordinates);
      const hourlyWeather = await getHourlyWeather(coordinates);
      setCurrentWeather(data);
      setLocationData(locationResult);
      setForecast(dailyWeather);
      const first24Hours = hourlyWeather?.slice(0, 24);
      setHourlyForecast(first24Hours);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg((error as Error).message);
    }
  }, [
    coordinates,
    getCurrentWeather,
    getDailyWeather,
    getHourlyWeather,
    getLocation,
    setIsLoading
  ]);

  useEffect(() => {
    setCurrentWeather(null);
    setLocationData(undefined);
    setForecast([]);
    setHourlyForecast([]);
    setIsLoading(true);
    if (coordinates) {
      getData();
    }
  }, [coordinates, getData]);

  return {
    currentWeather,
    locationData,
    forecast,
    hourlyForecast,
    setHourlyForecast,
    isLoading,
    errorMsg
  };
};

export default useGetData;
