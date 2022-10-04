import React, { FC, useMemo, useState } from 'react';
import { convertTime } from 'utils/helpers';
import styles from './Main.css';
import MainHourlyCard from './MainHourlyCard';
import { HourlyWeatherType } from 'types/weatherTypes';

type HourlySectionProps = {
  weather: HourlyWeatherType[];
};

const getHourLabels = (weather: HourlyWeatherType[]): string[] => {
  const labels: string[] = [];

  weather.forEach((el: HourlyWeatherType, i: number) => {
    if (i === 0 || i === 7 || i === 15 || i === 23) {
      const hours = convertTime(el.time).hours;
      const minutes = convertTime(el.time).minutes;
      labels.push(`${hours}:${minutes}`);
    }
  });

  return labels;
};

const HourlySection: FC<HourlySectionProps> = ({ weather }) => {
  const [hour, setHour] = useState<number>(0);

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

  const hourLabels = useMemo(() => getHourLabels(weather), [weather]);

  return (
    <div className={styles['section-hourly']}>
      <MainHourlyCard hourlyWeather={currentWeatherByHour!} />
      <input
        type="range"
        className={styles['hourly-input-range']}
        value={hour}
        min={0}
        max={23}
        onChange={e => setHour(e.target.valueAsNumber)}
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
