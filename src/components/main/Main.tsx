import styles from './Main.css';
import commonStyle from '../../styles/commonStyles.css';

import React, { useContext, FC, useEffect, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { positionContext } from 'context/positionContext';
import { getCity } from 'services/getCity';
import { getWeather } from 'services/getWeather';
import { CurrentWeatherType, HourlyWeatherType, DailyWeatherType } from 'types/weatherTypes';
import { LocationInfoType } from 'types/cityInfoType';
import { defaultLocationInfo } from './defaultStates';
import MainCard from './MainCard';
import MainHourlyCard from './MainHourlyCard';
import MainDailyCard from './MainDailyCard';

const Main: FC = () => {
  const [location, setLocation] = useState<LocationInfoType>(defaultLocationInfo);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType | undefined>(undefined);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType[]>([]);
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType[]>([]);
  const [selectDays, setSelectDays] = useState<string>('');

  const { coordinates } = useParams();
  const [paramLongitude, paramLatitude] = (coordinates || '').split(',');

  const {
    state: { position, positionError }
  } = useContext(positionContext);

  const resultLongitude = paramLongitude || position.longitude;
  const resultLatitude = paramLatitude || position.latitude;

  async function fetchData(lon: number | string, lat: number | string) {
    Promise.all([
      getCity(lon, lat),
      getWeather<{ current: CurrentWeatherType }>('/current/', lon, lat),
      getWeather<{ forecast: HourlyWeatherType[] }>('/forecast/hourly/', lon, lat)
    ]).then(res => {
      setLocation(res[0]);
      setCurrentWeather(res[1].current);
      setHourlyWeather(res[2].forecast);
    });
  }

  const handleDaysSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectDays(e.target.value);
    if (e.target.value) {
      getWeather<{ forecast: DailyWeatherType[] }>(
        '/forecast/daily/',
        resultLongitude,
        resultLatitude,
        { periods: e.target.value, dataset: 'full' }
      ).then(res => setDailyWeather(res.forecast));
    }
  };

  useEffect(() => {
    if (resultLongitude && resultLongitude !== '0') {
      fetchData(resultLongitude, resultLatitude);
    }
  }, [resultLongitude, resultLatitude]);

  return (
    <main className={commonStyle.container}>
      {currentWeather ? (
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
            <h2 className={styles['weather-section-title']}>Daily weather</h2>
            <select
              value={selectDays}
              onChange={handleDaysSelected}
              className={styles['days-select']}
            >
              <option value="">Choose days</option>
              <option value="7">7 days</option>
              <option value="10">10 days</option>
              <option value="14">14 days</option>
            </select>
            {selectDays && (
              <div className={styles['section-daily']}>
                {dailyWeather.map(el => (
                  <MainDailyCard key={el.date} dailyWeather={el} />
                ))}
              </div>
            )}
          </section>
        </>
      ) : (
        <p>{positionError}</p>
      )}
    </main>
  );
};

export default Main;
