import React, { FC, useEffect, useContext } from 'react';

import { positionContext } from 'context/positionContext';

import HourlySection from './HourlySection';

import { useAppSelector, useHourlyWeatherDispatch } from 'store/hooks';
import Loader from 'components/loader/Loader';
import { layerSelector } from 'store/layer/layerSelectors';
import { loadHourlyWeather } from 'store/hourlyWeather/hourlyWeatherActions';
import { hourlyWeatherSelector } from 'store/hourlyWeather/hourlyWeatherSelectors';

const AirQuality: FC = () => {
  const dispatch = useHourlyWeatherDispatch();
  const layer = useAppSelector(layerSelector);
  const { data: weather, loading, error } = useAppSelector(hourlyWeatherSelector);

  const {
    state: { position }
  } = useContext(positionContext);

  useEffect(() => {
    dispatch(loadHourlyWeather({ position, layer, settings: {} }));
  }, [position, dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <h3>Oops: {error}</h3>}
      {weather && !loading && <HourlySection />}
    </>
  );
};

export default AirQuality;
