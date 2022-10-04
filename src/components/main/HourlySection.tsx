import React, { FC, useMemo, useState, useRef, ChangeEvent } from 'react';
import { convertTime } from 'utils/helpers';
import styles from './Main.css';
import MainHourlyCard from './MainHourlyCard';
import { HourlyWeatherType } from 'types/weatherTypes';
import classNames from 'classnames';

type HourlySectionProps = {
  weather: HourlyWeatherType[];
};

const CORRECT_POSITION_COEFFICIENT = 4.2;

const getHourLabels = (weather: HourlyWeatherType[], middleLabelsCount: number): string[] => {
  const labels: string[] = [];

  const step = weather.length / (middleLabelsCount + 1);

  const firstEl = weather.at(0);
  const lastEl = weather.at(-1);

  labels.push(`
      ${convertTime(firstEl!.time).hours}:${convertTime(firstEl!.time).minutes}
    `);

  for (let i = step - 1; i < weather.length - step; i = i + step) {
    const hours = convertTime(weather[i].time).hours;
    const minutes = convertTime(weather[i].time).minutes;
    labels.push(`${hours}:${minutes}`);
  }

  labels.push(`
      ${convertTime(lastEl!.time).hours}:${convertTime(lastEl!.time).minutes}
    `);

  return labels;
};

const HourlySection: FC<HourlySectionProps> = ({ weather }) => {
  const [hour, setHour] = useState<number>(0);
  const inputLabelRef = useRef<HTMLSpanElement | null>(null);
  const { current: inputLabel } = inputLabelRef;
  const timeoutId = useRef<number>(0);

  const hoursSchema = useMemo(
    () =>
      weather.reduce((acc: { [index: string]: number }, el, i) => {
        acc[i] = +convertTime(el.time).hours;
        return acc;
      }, {}),
    [weather]
  );

  const currentWeatherByHour = weather.find(
    (el: HourlyWeatherType) => +convertTime(el.time).hours === hoursSchema[hour]
  );

  const hourLabels = useMemo(() => getHourLabels(weather, 2), [weather]);

  const date = convertTime(currentWeatherByHour!.time);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value: number = e.target.valueAsNumber;

    clearTimeout(timeoutId.current);
    setHour(value);

    if (inputLabel) {
      inputLabel.classList.add(classNames(styles['show']));
      inputLabel.style.left = value * CORRECT_POSITION_COEFFICIENT + '%';
      timeoutId.current = window.setTimeout(() => {
        inputLabel.classList.remove(classNames(styles['show']));
      }, 1000);
    }
  };

  return (
    <div className={styles['section-hourly']}>
      <MainHourlyCard hourlyWeather={currentWeatherByHour!} />
      <div className={styles['hourly-input-value']}>
        <span ref={inputLabelRef}>
          {date.hours}:{date.minutes}
        </span>
      </div>
      <input
        type="range"
        className={styles['hourly-input-range']}
        value={hour}
        min={0}
        max={23}
        onChange={onChangeHandler}
      />
      <div className={styles['hour-labels']}>
        {hourLabels.map(el => (
          <div key={el}>{el}</div>
        ))}
      </div>
    </div>
  );
};

export default HourlySection;
