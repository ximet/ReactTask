import styles from './Main.css';
import commonStyle from '../../styles/commonStyles.css';

import React, { useContext, FC, useEffect, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { positionContext } from 'context/positionContext';
import { getCity } from 'services/getCity';
import { getWeather } from 'services/getWeather';
import { CurrentWeatherType, HourlyWeatherType, DailyWeatherType } from 'types/weatherTypes';
import { LocationInfoType } from 'types/cityInfoType';
import { defaultLocationInfo } from './defaultStates';
import MainCard from './MainCard';
import MainHourlyCard from './MainHourlyCard';
import MainDailyCard from './MainDailyCard';
import GraphHourly from './GraphHourly';
import GraphDaily from './GraphDaily';

const Main: FC = () => {
  const [location, setLocation] = useState<LocationInfoType>(defaultLocationInfo);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType | undefined>(undefined);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType[]>([]);
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType[]>([]);
  const [selectDays, setSelectDays] = useState<string>('');
  const [view, setView] = useState<'cards' | 'graph'>('cards');

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
          <div className={styles['view-btns-wrapper']}>
            <button
              className={classNames(
                styles['view-btn'],
                view === 'cards' ? styles['active-view-btn'] : ''
              )}
              onClick={() => setView('cards')}
            >
              Cards view
            </button>
            <button
              className={classNames(
                styles['view-btn'],
                view === 'graph' ? styles['active-view-btn'] : ''
              )}
              onClick={() => setView('graph')}
            >
              Graph view
            </button>
          </div>
          <section className={styles['weather-section-wrapper']}>
            <h2 className={styles['weather-section-title']}>Hourly weather</h2>
            {view === 'cards' ? (
              <div className={styles['section-hourly']}>
                {hourlyWeather.map(el => (
                  <MainHourlyCard key={el.time} hourlyWeather={el} />
                ))}
              </div>
            ) : (
              <GraphHourly weather={hourlyWeather} />
            )}
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
              <>
                {view === 'cards' ? (
                  <div className={styles['section-daily']}>
                    {dailyWeather.map(el => (
                      <MainDailyCard key={el.date} dailyWeather={el} />
                    ))}
                  </div>
                ) : (
                  <GraphDaily weather={dailyWeather} />
                )}
              </>
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
