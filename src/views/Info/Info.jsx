import React from 'react';

import styles from './Info.module.scss';
import CloudImage from '../../assets/images/about-weather-cloud-img.png';
import SunImage from '../../assets/images/about-weather-sun-img.png';

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <div className={styles.imgContainer}>
          <img className={styles.infoImage} src={CloudImage} alt="cloud" />
        </div>
        <div className={styles.infoText}>
          <h2 className={styles.infoTitle}>Selected city forecast</h2>
          <span className={styles.infoContent}>
            With our app so easy to receive the weather conditions in your current location. Also
            this website presents weather observations, weather forecasts and climatological
            information for selected cities.
          </span>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.infoText}>
          <h2 className={styles.infoTitle}>Detailed forecast</h2>
          <span className={styles.infoContent}>
            The weather app also provides weather conditions, relative humidity, temperature in
            different units and wind speed in addition to 7 days in future and hourly weather
            forecast.
          </span>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.infoImage} src={SunImage} alt="sun" />
        </div>
      </div>
    </div>
  );
}

export default Info;
