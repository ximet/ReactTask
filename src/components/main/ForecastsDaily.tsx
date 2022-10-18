import React, { ChangeEvent, FC, useState, useContext } from 'react';
import { ViewType } from 'types/viewType';

import { positionContext } from 'context/positionContext';

import GraphDaily from './GraphDaily';
import MainDailyCard from './MainDailyCard';

import styles from './Main.css';
import { useAppSelector, useDailyWeatherDispatch } from 'store/hooks';
import { dailyWeatherSelector } from 'store/dailyWeather/dailyWeatherSelectors';
import { loadDailyWeather } from 'store/dailyWeather/dailyWeatherActions';

type ForecastsDailyProps = {
  view: ViewType;
};

const ForecastsDaily: FC<ForecastsDailyProps> = ({ view }) => {
  const { data: dailyWeather, error } = useAppSelector(dailyWeatherSelector);
  const [selectDays, setSelectDays] = useState<string>('');
  const {
    state: { position }
  } = useContext(positionContext);

  const dispatch = useDailyWeatherDispatch();

  const handleDaysSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedDays = e.target.value;
    setSelectDays(selectedDays);
    if (selectedDays) {
      dispatch(
        loadDailyWeather({
          position,
          settings: {
            periods: selectedDays,
            dataset: 'full'
          }
        })
      );
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
      {error && <h3>Oops: {error}</h3>}
      {selectDays && dailyWeather && (
        <>
          {view === 'cards' ? (
            <div className={styles['section-daily']}>
              {dailyWeather.map(el => (
                <MainDailyCard key={el.date} dailyWeather={el} />
              ))}
            </div>
          ) : (
            <GraphDaily />
          )}
        </>
      )}
    </section>
  );
};

export default ForecastsDaily;
