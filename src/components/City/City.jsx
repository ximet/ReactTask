import React from 'react';
import PropTypes from 'prop-types';
import styles from './City.scss';

function City({ city, cityName }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__name}>{cityName}</h2>
      <div className={styles.container__body}>
        <div className={styles.container__temperature}>
          <div className={styles.container__real_temperature}>
            <span>
              {city.temperature > 0 && '+'}
              {city.temperature}°
            </span>
          </div>
          <div>
            Feels like{' '}
            <span className={styles.container__feels_temperature}>
              {city.feelsLikeTemp > 0 && '+'}
              {city.feelsLikeTemp}°
            </span>
          </div>
        </div>
        {/* svg */}
        <div></div>
        <div>
          <span className={styles.container__wind}>{city.windSpeed}</span> km/h
        </div>
      </div>
      <div className={styles.container__footer}>
        <span className={styles.container__footer_text}>{city.symbolPhrase}</span>
      </div>
    </div>
  );
}

City.propTypes = {
  city: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    feelsLikeTemp: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    symbolPhrase: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired
};

export default City;
