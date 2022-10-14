import React, { FC, useEffect, useContext } from 'react';

import { positionContext } from 'context/positionContext';

import HourlySection from './HourlySection';

import { useAirQualityDispatch, useAppSelector } from 'store/hooks';
import { loadAirQuality } from 'store/airQuality/airQualityActions';
import { airQualitySelector } from 'store/airQuality/airQualitySelectors';
import Loader from 'components/loader/Loader';

const AirQuality: FC = () => {
  const dispatch = useAirQualityDispatch();
  const { data: airQuality, loading, error } = useAppSelector(airQualitySelector);

  const {
    state: { position }
  } = useContext(positionContext);

  useEffect(() => {
    dispatch(loadAirQuality(position));
  }, [position, dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <h3>Oops: {error}</h3>}
      {airQuality && <HourlySection weather={airQuality} />}
    </>
  );
};

export default AirQuality;
