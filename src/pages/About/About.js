import React from 'react';
import styles from './About.module.css';

const ABOUT_LABELS = {
  TITLE: 'ABOUT US',
  TEXT:
    'This application is created for educational purposes. It uses "Foreca Weather API" which provides access to real-time weather information for millions of locations worldwide.'
};

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>{ABOUT_LABELS.TITLE}</h1>
      <p>{ABOUT_LABELS.TEXT}</p>
    </div>
  );
};

export default About;
