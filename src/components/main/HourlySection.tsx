import React, { FC, useMemo, useState, useRef, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { layerSelector } from 'store/layer/layerSelectors';
import { convertTime, getTimeLabel } from 'utils/helpers';
import styles from './Main.css';
import MainHourlyCard from './MainHourlyCard';
import AirQualityCard from './AirQualityCard';
import { HourlyWeatherType } from 'types/weatherTypes';
import { AirQualityType } from 'types/airQualityType';
import classNames from 'classnames';

type WeatherType = Array<HourlyWeatherType | AirQualityType>;

type HourlySectionProps = {
  weather: WeatherType;
};

const CORRECT_POSITION_COEFFICIENT = 4.2;

const getHourLabels = (weather: WeatherType, middleLabelsCount: number): string[] => {
  const labels: string[] = [];

  const step = Math.floor(weather.length / (middleLabelsCount + 1));

  const firstEl = weather.at(0);
  const lastEl = weather.at(-1);

  labels.push(getTimeLabel(firstEl!.time));

  for (let i = step - 1; i < weather.length - step; i = i + step) {
    labels.push(getTimeLabel(weather[i].time));
  }

  labels.push(getTimeLabel(lastEl!.time));

  return labels;
};

const HourlySection: FC<HourlySectionProps> = ({ weather }) => {
  const [hour, setHour] = useState<number>(0);
  const inputLabelRef = useRef<HTMLSpanElement | null>(null);
  const { current: inputLabel } = inputLabelRef;
  const timeoutId = useRef<number>(0);
  const layer = useSelector(layerSelector);

  const hoursSchema: {
    [index: string]: number;
  } = useMemo(
    () =>
      weather.reduce((acc: { [index: string]: number }, el, i) => {
        acc[i] = +convertTime(el.time).hours;
        return acc;
      }, {}),
    [weather]
  );

  const currentWeatherByHour: HourlyWeatherType | AirQualityType | undefined = weather.find(
    el => +convertTime(el.time).hours === hoursSchema[hour]
  );

  const hourLabels: string[] = useMemo(() => getHourLabels(weather, 2), [weather]);

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
      {layer === 'forecasts' && (
        <MainHourlyCard hourlyWeather={currentWeatherByHour! as HourlyWeatherType} />
      )}
      {layer === 'air' && <AirQualityCard airQuality={currentWeatherByHour! as AirQualityType} />}
      <div className={styles['hourly-input-value']}>
        <span ref={inputLabelRef}>{getTimeLabel(currentWeatherByHour!.time)}</span>
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
