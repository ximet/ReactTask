import React, { ChangeEvent, FC, useState, useContext } from 'react';
import { DailyWeatherType } from 'types/weatherTypes';
import { ViewType } from './Forecasts';

import { getWeather } from 'services/getWeather';
import { positionContext } from 'context/positionContext';

import GraphDaily from './GraphDaily';
import MainDailyCard from './MainDailyCard';

import styles from './Main.css';

type ForecastsDailyProps = {
  view: ViewType;
};

const ForecastsDaily: FC<ForecastsDailyProps> = ({ view }) => {
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType[]>([]);
  const [selectDays, setSelectDays] = useState<string>('');
  const {
    state: { position }
  } = useContext(positionContext);

  const handleDaysSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedDays = e.target.value;
    setSelectDays(selectedDays);
    if (selectedDays) {
      getWeather<{ forecast: DailyWeatherType[] }>(
        '/forecast/daily/',
        position.longitude,
        position.latitude,
        { periods: selectedDays, dataset: 'full' }
      ).then(res => setDailyWeather(res.forecast));
    }
  };

  return (
    <section className={styles['weather-section-wrapper']}>
      <h2 className={styles['weather-section-title']}>Daily weather</h2>
      <select value={selectDays} onChange={handleDaysSelected} className={styles['days-select']}>
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
  );
};

export default ForecastsDaily;
