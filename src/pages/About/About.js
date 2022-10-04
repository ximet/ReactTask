import React from 'react';
import styles from './About.module.css';

import { ABOUT_TEXT, ABOUT_TITLE } from '../../components/constants';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>{ABOUT_TITLE}</h1>
      <p>{ABOUT_TEXT}</p>
    </div>
  );
};

export default About;
