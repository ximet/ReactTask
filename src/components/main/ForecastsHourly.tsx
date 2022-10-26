import React, { FC, useEffect, useContext } from 'react';
import { ViewType } from 'types/viewType';

import GraphHourly from './GraphHourly';
import HourlySection from './HourlySection';
import { useAppSelector, useHourlyWeatherDispatch } from 'store/hooks';
import { loadHourlyWeather } from 'store/hourlyWeather/hourlyWeatherActions';

import styles from './Main.css';
import { positionContext } from 'context/positionContext';
import { hourlyWeatherSelector } from 'store/hourlyWeather/hourlyWeatherSelectors';
import Loader from 'components/loader/Loader';
import { layerSelector } from 'store/layer/layerSelectors';
import ErrorMessage from 'components/error/ErrorMessage';

type ForecastsHourlyProps = {
  view: ViewType;
};

const ForecastsHourly: FC<ForecastsHourlyProps> = ({ view }) => {
  const dispatch = useHourlyWeatherDispatch();
  const { data: hourlyWeather, loading, error } = useAppSelector(hourlyWeatherSelector);
  const layer = useAppSelector(layerSelector);

  const {
    state: { position }
  } = useContext(positionContext);

  useEffect(() => {
    dispatch(loadHourlyWeather({ position, layer }));
  }, [dispatch, position, layer]);

  return (
    <section className={styles['weather-section-wrapper']}>
      <h2 className={styles['weather-section-title']}>Hourly weather</h2>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {hourlyWeather && !loading && <>{view === 'cards' ? <HourlySection /> : <GraphHourly />}</>}
    </section>
  );
};

export default ForecastsHourly;
