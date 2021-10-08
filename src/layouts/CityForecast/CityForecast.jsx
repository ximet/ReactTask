import React from 'react';

import styles from './CityForecast.module.scss';
import { THEMES } from '../../constants/themes';
import LocationIcon from '../../assets/images/location-icon.png';
import WindIcon from '../../assets/images/wind-icon.png';
import HumidityIcon from '../../assets/images/hum-icon.png';
import lightBg from '../../assets/images/light-bg-img.jpg';
import darkBg from '../../assets/images/dark-bg-img.jpg';

import CurrentDate from '../../components/CurrentDate/CurrentDate';
import TemperatureUniteToggle from './TemperatureUniteToggle/TemperatureUniteToggle';
import VerticalLine from '../../components/VerticalLine/VerticalLine';

function CityForecast({ cityForecast, cityInfo, theme }) {
  const weather = cityForecast.current;
  const symbolPhrase = weather.symbolPhrase[0].toUpperCase() + weather.symbolPhrase.slice(1);
  const themeBg = theme === THEMES.light ? lightBg : darkBg;

  return (
    <div className={styles.cityForecast}>
      <img className={styles.cityForecastBg} src={themeBg} />
      <div className={styles.content}>
        <CurrentDate weatherImg={weather.symbol} />
        <div className={styles.cityTemperature}>
          <span className={styles.temperatureDegrees}>{weather.temperature}</span>
          <TemperatureUniteToggle />
        </div>
        <span className={styles.temperatureDescription}>{symbolPhrase}</span>
        <div className={styles.cityLocation}>
          <img src={LocationIcon} alt="location icon" />
          <span>{`${cityInfo.adminArea}, ${cityInfo.country}`}</span>
        </div>
        <div className={styles.addedInfo}>
          <div className={styles.addedInfoType}>
            <div className={styles.addedInfoTypeName}>
              <img src={WindIcon} alt="wind icon" />
              <span className={styles.addedInfoType}>Wind</span>
            </div>
            <div className={styles.addedInfoTypeName}>
              <img src={HumidityIcon} alt="wind icon" />
              <span className={styles.addedInfoType}>Hum</span>
            </div>
          </div>
          <VerticalLine />
          <div className={styles.addedInfoValue}>
            <span className={styles.addedInfoValue}>{weather.windSpeed} km/h</span>
            <span className={styles.addedInfoValue}>{weather.relHumidity} %</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityForecast;
