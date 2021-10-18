import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CityForecastTypes, CityInfoTypes } from '../../types/WeatherDataTypes';

import styles from './CityForecast.module.scss';
import { THEMES, BG_IMAGES } from '../../constants/themes';
import LocationIcon from '../../assets/images/location-icon.png';
import WindIcon from '../../assets/images/wind-icon.png';
import HumidityIcon from '../../assets/images/hum-icon.png';

import CurrentDate from '../../components/CurrentDate/CurrentDate';
import TemperatureUniteToggle from './TemperatureUniteToggle/TemperatureUniteToggle';
import VerticalLine from '../../components/VerticalLine/VerticalLine';

function CityForecast({ cityForecast, cityInfo, theme }) {
  const symbolPhrase =
    cityForecast.symbolPhrase[0].toUpperCase() + cityForecast.symbolPhrase.slice(1);
  const themeBg = theme === THEMES.light ? BG_IMAGES.light : BG_IMAGES.dark;

  return (
    <div className={styles.cityForecast}>
      <img className={styles.cityForecastBg} src={themeBg} />
      <div className={styles.content}>
        <CurrentDate weatherImg={cityForecast.symbol} />
        <div className={styles.cityTemperature}>
          <span className={styles.temperatureDegrees}>{cityForecast.temperature}</span>
          <TemperatureUniteToggle />
        </div>
        <span className={styles.temperatureDescription}>{symbolPhrase}</span>
        <div className={styles.cityLocation}>
          <img src={LocationIcon} alt="location icon" />
          <span>{`${cityInfo.name}, ${cityInfo.country}`}</span>
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
            <span className={styles.addedInfoValue}>{cityForecast.windSpeed} km/h</span>
            <span className={styles.addedInfoValue}>{cityForecast.relHumidity} %</span>
          </div>
        </div>
      </div>
    </div>
  );
}

CityForecast.propTypes = {
  cityForecast: CityForecastTypes,
  cityInfo: CityInfoTypes,
  theme: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  theme: state.theme.currentTheme
});

export default connect(mapStateToProps)(CityForecast);
