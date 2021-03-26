import React from 'react';
import PageLayout from '../../PageLayout/PageLayout';
import styles from './AboutPage.scss';

function AboutPage() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <p className={styles.container__bigText}>About us</p>
        <ul>
          <li className={styles.container__text}>Search cities by their names</li>
          <li className={styles.container__text}>
            Info about current condition(Location, Latitude, Longtitude, Altitude, Temperature,
            Wind, Time zone) for chosen city
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default AboutPage;
