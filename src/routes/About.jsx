import React from 'react';
import styles from '../styles.scss';

function About() {
  return (
    <div className={styles.about}>
      <p>
        Weather History API provides observational weather information from the past by showing
        measured weather parameters in a certain location at a specific date. The API delivers all
        the measured weather parameters as both daily summary values and hourly values. The queries
        can be made based on a given day and coordinate point. The API will respond with
        observational data from the nearest relevant weather station or from weather forecast model
        data (augmented observation). Augmented observations are provided when the closest weather
        station with sufficient observations is too far away to give representative information.
        History data is available from January 2009.
      </p>
    </div>
  );
}

export default About;
