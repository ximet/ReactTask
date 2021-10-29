import React from 'react';
import PropTypes from 'prop-types';

import styles from './CityForecast.module.scss';
import LocationIcon from '../../assets/images/location-icon.png';
import WindIcon from '../../assets/images/wind-icon.png';
import HumidityIcon from '../../assets/images/hum-icon.png';

import CurrentDate from '../../components/CurrentDate/CurrentDate';
import TemperatureUnitToggle from './TemperatureUnitToggle/Container';
import Line from '../../components/Line/Line';
import { getConvertedTemperature } from '../../utils/temperatureData';
import { WIND_SPEED_UNIT, HUMIDITY_UNIT } from '../../constants/units';

function CityForecast({ cityForecast, cityInfo, themeBg, weatherUnit }) {
  const symbolPhrase =
    cityForecast.symbolPhrase[0].toUpperCase() + cityForecast.symbolPhrase.slice(1);
  const temperature = getConvertedTemperature(cityForecast.temperature, weatherUnit);

  return (
    <div className={styles.cityForecast}>
      <img className={styles.cityForecastBg} src={themeBg} />
      <div className={styles.content}>
        <CurrentDate weatherImg={cityForecast.symbol} />
        <div className={styles.cityTemperature}>
          <span className={styles.temperatureDegrees}>{temperature}</span>
          <TemperatureUnitToggle />
        </div>
        <span className={styles.temperatureDescription}>{symbolPhrase}</span>
        <div className={styles.cityLocation}>
          <img src={LocationIcon} alt="location icon" />
          <span className={styles.location}>{`${cityInfo.name}, ${cityInfo.country}`}</span>
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
          <Line type="vertical" theme="light" />
          <div className={styles.addedInfoValue}>
            <span className={styles.addedInfoValue}>
              {cityForecast.windSpeed} {WIND_SPEED_UNIT}
            </span>
            <span className={styles.addedInfoValue}>
              {cityForecast.relHumidity} {HUMIDITY_UNIT}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

CityForecast.defaultProps = {
  cityInfo: {}
};

CityForecast.propTypes = {
  cityForecast: PropTypes.shape({
    relHumidity: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    symbolPhrase: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired
  }),
  cityInfo: PropTypes.shape({
    country: PropTypes.string,
    name: PropTypes.string
  }),
  themeBg: PropTypes.string.isRequired,
  weatherUnit: PropTypes.string.isRequired
};

export default CityForecast;
