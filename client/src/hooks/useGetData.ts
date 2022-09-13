import { createToken } from 'API/get';
import { useState, useEffect, useCallback } from 'react';
import { DailyWeather, HourlyWeather, LocationData, WeatherData } from 'types';

const useGetData = (
  getCurrentWeather,
  getDailyWeather,
  getHourlyWeather,
  getLocation,
  { coordinates, location }
) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | undefined>(undefined);
  const [forecast, setForecast] = useState<DailyWeather[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyWeather[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = useCallback(async () => {
    await createToken();
    const data = await getCurrentWeather(coordinates);
    const locationResult = await getLocation(location || coordinates);
    const dailyWeather = await getDailyWeather(coordinates);
    const hourlyWeather = await getHourlyWeather(coordinates);
    setCurrentWeather(data);
    setLocationData(locationResult.locations ? locationResult.locations[0] : locationResult);
    setForecast(dailyWeather);
    const first24Hours = hourlyWeather?.slice(0, 24);
    setHourlyForecast(first24Hours);
    setIsLoading(false);
  }, [
    coordinates,
    getCurrentWeather,
    getDailyWeather,
    getHourlyWeather,
    getLocation,
    location,
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
  }, [coordinates, getData, setIsLoading]);

  return { currentWeather, locationData, forecast, hourlyForecast, setHourlyForecast, isLoading };
};

export default useGetData;
