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
import { ViewType } from 'types/viewType';
import { defaultLocationInfo } from './defaultStates';
import { Coordinates } from 'types/positionType';

const Forecasts: FC = () => {
  const [location, setLocation] = useState<LocationInfoType>(defaultLocationInfo);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType | undefined>(undefined);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType[]>([]);

  const [view, setView] = useState<ViewType>('cards');

  const {
    state: { position, positionError }
  } = useContext(positionContext);

  async function fetchData(position: Coordinates) {
    const { longitude, latitude } = position;
    Promise.all([
      getCity(longitude, latitude),
      getWeather<{ current: CurrentWeatherType }>('/current/', position)
    ]).then(res => {
      setLocation(res[0]);
      setCurrentWeather(res[1].current);
    });
  }

  useEffect(() => {
    if (position.longitude && position.latitude) {
      fetchData(position);
    }
  }, [position]);
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
          <ForecastsHourly view={view} />
          <ForecastsDaily view={view} />
        </>
      ) : (
        <p>{positionError}</p>
      )}
    </>
  );
};

export default Forecasts;
