import React from 'react';
import * as styles from '../../styles/AboutPage.module.css';
import { useNavigate } from 'react-router-dom';

function AboutPage(props) {
  const navigate = useNavigate();

  const aboutHeading = <h1 className={styles.aboutHeading}>About us</h1>;
  const aboutTxt =
    'We have implemented this app to give access to people from all across the globe to the current and also future weather forecast for cities in any country. With the help of few clicks you can find information about the temperature, humidity, pressure, visibility, wind, as well as other weather characteristics for your chosen city of interest.';

  const navigateToHome = () => navigate('/');

  return (
    <div className={styles.pageWrapper}>
      {aboutHeading}
      <p>{aboutTxt}</p>
      <button onClick={navigateToHome} className={styles.homeBtn}>
        Home Page
      </button>
    </div>
  );
}

export { AboutPage };
