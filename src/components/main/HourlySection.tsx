import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import { convertTime } from 'utils/helpers';
import styles from './Main.css';
import MainHourlyCard from './MainHourlyCard';
import { HourlyWeatherType } from 'types/weatherTypes';

type HourlySectionProps = {
  weather: HourlyWeatherType[];
};

const getHourLabels = (weather: HourlyWeatherType[]): string[] => {
  const labels: string[] = [];

  for (let i = 0; i < weather.length; i++) {
    if (i === 0 || i === 7 || i === 15 || i === 23) {
      const hours = convertTime(weather[i].time).hours;
      const minutes = convertTime(weather[i].time).minutes;
      labels.push(`${hours}:${minutes}`);
    }
  }

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
    el => +convertTime(el.time).hours === hoursSchema[hour]
  );

  const hourLabels = useMemo(() => getHourLabels(weather), [weather]);

  return (
    <div className={styles['section-hourly']}>
      {currentWeatherByHour && (
        <>
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
        </>
      )}
    </div>
  );
};

export default HourlySection;
