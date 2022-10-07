import React, { FC, useState, useEffect, useContext } from 'react';

import { getWeather } from 'services/getWeather';
import { positionContext } from 'context/positionContext';

import HourlySection from './HourlySection';

import { AirQualityType } from 'types/airQualityType';

const AirQuality: FC = () => {
  const [airQuality, serAirQuality] = useState<AirQualityType[]>([]);
  const {
    state: { position }
  } = useContext(positionContext);

  useEffect(() => {
    getWeather<{ forecast: AirQualityType[] }>(
      '/air-quality/forecast/hourly/',
      position.longitude,
      position.latitude
    ).then(res => serAirQuality(res.forecast));
  }, [position.longitude, position.latitude]);

  return <>{airQuality.length && <HourlySection weather={airQuality} />}</>;
};

export default AirQuality;
