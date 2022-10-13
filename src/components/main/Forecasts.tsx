import React, { FC, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useCurrentWeatherDispatch } from 'store/hooks';
import styles from './Main.css';
import classNames from 'classnames';
import { CurrentWeatherDispatch } from 'store/currentWeather/types';

import MainCard from './MainCard';
import ForecastsHourly from './ForecastsHourly';
import ForecastsDaily from './ForecastsDaily';
import Loader from 'components/loader/Loader';
import { positionContext } from 'context/positionContext';
import { loadCurrentWeather } from 'store/currentWeather/currentWeatherActions';
import { currentWeatherSelector } from 'store/currentWeather/currentWeatherSelectors';
import { getCity } from 'services/getCity';
import { LocationInfoType } from 'types/cityInfoType';
import { ViewType } from 'types/viewType';
import { defaultLocationInfo } from './defaultStates';

const Forecasts: FC = () => {
  const [location, setLocation] = useState<LocationInfoType>(defaultLocationInfo);

  const [view, setView] = useState<ViewType>('cards');

  const { data: currentWeather, loading, error: loadingError } = useSelector(
    currentWeatherSelector
  );
  const dispatch = useCurrentWeatherDispatch();

  const {
    state: { position, positionError }
  } = useContext(positionContext);

  useEffect(() => {
    if (position.longitude && position.latitude) {
      getCity(position).then(res => setLocation(res));
      dispatch(loadCurrentWeather(position));
    }
  }, [position, dispatch]);
  return (
    <>
      {loading && <Loader />}
      {loadingError && <h3>Oops: {loadingError}</h3>}
      {positionError && <h3>We can't show you current weather, because: {positionError}</h3>}
      {currentWeather && !loadingError && !positionError && !loading && (
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
      )}
    </>
  );
};

export default Forecasts;
