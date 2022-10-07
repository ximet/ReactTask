import React, { FC } from 'react';
import { HourlyWeatherType } from 'types/weatherTypes';
import { ViewType } from './Forecasts';

import GraphHourly from './GraphHourly';
import HourlySection from './HourlySection';

import styles from './Main.css';

type ForecastsHourlyProps = {
  view: ViewType;
  hourlyWeather: HourlyWeatherType[];
};

const ForecastsHourly: FC<ForecastsHourlyProps> = ({ view, hourlyWeather }) => {
  return (
    <section className={styles['weather-section-wrapper']}>
      <h2 className={styles['weather-section-title']}>Hourly weather</h2>
      {view === 'cards' ? (
        <HourlySection weather={hourlyWeather} />
      ) : (
        <GraphHourly weather={hourlyWeather} />
      )}
    </section>
  );
};

export default ForecastsHourly;
