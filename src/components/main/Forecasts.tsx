import React, { FC, useContext, useEffect, useState } from 'react';
import styles from './Main.css';
import classNames from 'classnames';

import MainCard from './MainCard';
import ForecastsHourly from './ForecastsHourly';
import ForecastsDaily from './ForecastsDaily';
import { positionContext } from 'context/positionContext';
import { getCity } from 'services/getCity';
import { getWeather } from 'services/getWeather';
import { CurrentWeatherType, HourlyWeatherType } from 'types/weatherTypes';
import { LocationInfoType } from 'types/cityInfoType';
import { defaultLocationInfo } from './defaultStates';

export type ViewType = 'cards' | 'graph';
const Forecasts: FC = () => {
  const [location, setLocation] = useState<LocationInfoType>(defaultLocationInfo);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType | undefined>(undefined);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType[]>([]);

  const [view, setView] = useState<ViewType>('cards');

  const {
    state: { position, positionError }
  } = useContext(positionContext);

  async function fetchData(lon: number | string, lat: number | string) {
    Promise.all([
      getCity(lon, lat),
      getWeather<{ current: CurrentWeatherType }>('/current/', lon, lat),
      getWeather<{ forecast: HourlyWeatherType[] }>('/forecast/hourly/', lon, lat, {
        dataset: 'full'
      })
    ]).then(res => {
      setLocation(res[0]);
      setCurrentWeather(res[1].current);
      setHourlyWeather(res[2].forecast);
    });
  }

  useEffect(() => {
    if (position.longitude && position.latitude) {
      fetchData(position.longitude, position.latitude);
    }
  }, [position.longitude, position.latitude]);
  return (
    <>
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
          <ForecastsHourly view={view} hourlyWeather={hourlyWeather} />
          <ForecastsDaily view={view} />
        </>
      ) : (
        <p>{positionError}</p>
      )}
    </>
  );
};

export default Forecasts;
