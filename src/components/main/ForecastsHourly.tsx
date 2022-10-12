import React, { FC, useState, useEffect, useContext } from 'react';
import { HourlyWeatherType } from 'types/weatherTypes';
import { ViewType } from 'types/viewType';

import GraphHourly from './GraphHourly';
import HourlySection from './HourlySection';

import styles from './Main.css';
import { getWeather } from 'services/getWeather';
import { positionContext } from 'context/positionContext';

type ForecastsHourlyProps = {
  view: ViewType;
};

const ForecastsHourly: FC<ForecastsHourlyProps> = ({ view }) => {
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType[]>([]);

  const {
    state: { position }
  } = useContext(positionContext);

  useEffect(() => {
    getWeather<{ forecast: HourlyWeatherType[] }>('/forecast/hourly/', position, {
      dataset: 'full'
    }).then(res => setHourlyWeather(res.forecast));
  }, [position]);
  return (
    <section className={styles['weather-section-wrapper']}>
      <h2 className={styles['weather-section-title']}>Hourly weather</h2>
      {view === 'cards' && hourlyWeather.length ? (
        <HourlySection weather={hourlyWeather} />
      ) : (
        <GraphHourly weather={hourlyWeather} />
      )}
    </section>
  );
};

export default ForecastsHourly;
