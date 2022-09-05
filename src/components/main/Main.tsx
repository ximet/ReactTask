import styles from './Main.css';
import commonStyle from '../../styles/commonStyles.css';

import React, { FC, useEffect, useState } from 'react';
import { usePosition } from 'hooks/usePosition';
import { getCity } from 'services/getCity';
import { getWeather } from 'services/getWeather';
import { CurrentWeatherType, HourlyWeatherType, DailyWeatherType } from 'types/weatherTypes';
import { LocationInfoType } from 'types/cityInfoType';
import { defaultCurrentWeather, defaultLocationInfo } from './defaultStates';
import MainCard from './MainCard';
import MainHourlyCard from './MainHourlyCard';
import MainDailyCard from './MainDailyCard';

const Main: FC = () => {
  const { position, error } = usePosition();
  const [location, setLocation] = useState<LocationInfoType>(defaultLocationInfo);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>(defaultCurrentWeather);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType[]>([]);
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType[]>([]);

  async function fetchData(lon: number, lat: number) {
    Promise.all([
      getCity(lon, lat),
      getWeather<{ current: CurrentWeatherType }>('/current/', lon, lat),
      getWeather<{ forecast: HourlyWeatherType[] }>('/forecast/hourly/', lon, lat),
      getWeather<{ forecast: DailyWeatherType[] }>(
        '/forecast/daily/',
        lon,
        lat,
        '&periods=10&dataset=full'
      )
    ]).then(res => {
      setLocation(res[0]);
      setCurrentWeather(res[1].current);
      setHourlyWeather(res[2].forecast);
      setDailyWeather(res[3].forecast);
    });
  }

  useEffect(() => {
    if (position.longitude) {
      const lon: number = position.longitude;
      const lat: number = position.latitude;

      fetchData(lon, lat);
    }
  }, [position.longitude]);

  return (
    <main className={commonStyle.container}>
      {currentWeather.time ? (
        <>
          <MainCard currentWeather={currentWeather} location={location} />
          <section className={styles['weather-section-wrapper']}>
            <h2 className={styles['weather-section-title']}>Hourly weather</h2>
            <div className={styles['section-hourly']}>
              {hourlyWeather.map(el => (
                <MainHourlyCard key={el.time} hourlyWeather={el} />
              ))}
            </div>
          </section>
          <section className={styles['weather-section-wrapper']}>
            <h2 className={styles['weather-section-title']}>Weather for 10 days</h2>
            <div className={styles['section-daily']}>
              {dailyWeather.map(el => (
                <MainDailyCard key={el.date} dailyWeather={el} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <p>{error}</p>
      )}
    </main>
  );
};

export default Main;
