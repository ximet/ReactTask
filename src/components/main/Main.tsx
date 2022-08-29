import styles from './Main.css';
import commonStyle from '../../styles/commonStyles.css';

import React, { FC, useEffect, useState } from 'react';
import { usePosition } from 'hooks/usePosition';
import { getCity } from 'services/getCity';
import { getCityWeather, cityWeatherType } from 'services/getWeather';

const Main: FC = () => {
  const { position, error } = usePosition();
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<cityWeatherType>({
    current: {
      time: '',
      symbol: '',
      symbolPhrase: '',
      temperature: 0,
      feelsLikeTemp: 0,
      relHumidity: 0,
      dewPoint: 0,
      windSpeed: 0,
      windDir: 0,
      windDirString: '',
      windGust: 0,
      precipProb: 0,
      precipRate: 0,
      cloudiness: 0,
      thunderProb: 0,
      uvIndex: 0,
      pressure: 0,
      visibility: 0,
  }})

  async function fetchData(lon: number, lat: number) {
    await getCity(lon, lat).then(locationData => setCity(locationData.city));
    await getCityWeather(lon, lat).then(cityWeather => setWeather(cityWeather))
  }

  useEffect(() => {
    if (position.longitude) {
      const lon = position.longitude as number;
      const lat = position.latitude as number;

      fetchData(lon, lat)
    }
  }, [position.longitude]);

  useEffect(() => {
    console.log(weather)
  }, [weather])

  return (
    <main className={commonStyle.container}>
      {weather.current.time ? (
        <>
          <span>{city}</span>
          <img src={`https://developer.foreca.com/static/images/symbols/${weather.current.symbol}.png`} alt={weather.current.symbolPhrase} />
          <p>{weather.current.symbolPhrase}</p>
          <p>Temperature: {weather.current.temperature}°C</p>
        </>
        
      ) : (
        <p>{error}</p>
      )}
    </main>
  );
};

export default Main;
