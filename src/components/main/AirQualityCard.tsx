import React, { FC } from 'react';
import styles from './Main.css';
import { AirQualityType } from 'types/airQualityType';
import { convertTime } from '../../utils/helpers';

type HourlyCardProps = {
  airQuality: AirQualityType;
};

const AirQualityCard: FC<HourlyCardProps> = ({ airQuality }) => {
  const {
    time,
    pollutant,
    AQI,
    AQI_CO,
    AQI_NO2,
    AQI_O3,
    AQI_SO2,
    AQI_PM10,
    AQI_PM2P5
  } = airQuality;

  const date = convertTime(time);

  return (
    <div className={styles['hourly-card']}>
      <h4 className={styles['hourly-card__title']}>{`${date.hours}:${date.minutes}`}</h4>
      <div className={styles['hourly-columns']}>
        <p className={styles['hourly-column']}>
          Pollutant : {pollutant}
          <br />
          General AQI: {AQI} (lower is better)
          <br />
          AQI based on carbon monoxide: {AQI_CO}
          <br />
          AQI based on nitrogen dioxide: {AQI_NO2}
        </p>
        <p className={styles['hourly-column']}>
          AQI based on ozone: {AQI_O3}
          <br />
          AQI based on sulfur dioxide: {AQI_SO2}
          <br />
          AQI based on particulate matter (PM10): {AQI_PM10}
          <br />
          AQI based on particulate matter (PM2.5): {AQI_PM2P5}
        </p>
      </div>
    </div>
  );
};

export default AirQualityCard;
