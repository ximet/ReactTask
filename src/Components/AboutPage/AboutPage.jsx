import { ThemeContext } from '../../context/themeContext';
import { Button } from '../';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import imgLight from '../../Assets/img/light.png';
import imgDark from '../../Assets/img/dark.png';

import styles from './AboutPage.module.scss';

function AboutPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={styles[`${theme}-theme`]}>
      <article className={styles.content}>
        <h2 className={styles.title}>All about the Cloud 9 Weather app</h2>
        <div className={styles['content--1']}>
          {theme === 'dark' ? (
            <img src={imgDark} className={styles.imgLight} width="500" />
          ) : (
            <img src={imgLight} className={styles.imgLight} width="500" />
          )}
          <p>
            🌍 Cloud 9 is one beautiful, easy-to-use app that allows you to browse weather for right
            now, today or the week for your current location and see average temps and record data
            for your location and around the world!
          </p>
          <br />
          <p>
            ☁️ There are a few simple things that you can do to be sure you get the most from the
            Cloud 9 Weather app.
          </p>
          <br />
          <p>
            📱 Be sure that you have a connection to the internet. If you are on a mobile device and
            away from Wi-Fi hotspots, be sure that you have allowed the device to use your cellular
            service.
          </p>
          <br />
          <p>
            🎯 We use the Foreca API service which is ranked the most accurate weather provider in
            rain forecasts globally.
          </p>
          <br />
          <p>
            💡 Send ideas for improving the app! We would love to hear from you! Send your thoughts,
            comments, and other feedback from within the app. If you see a specific error message,
            send feedback from within the app and include the error message in your feedback.
          </p>
        </div>
        <Link to="/feedback">
          <Button>Go to Feedback Page</Button>
        </Link>
      </article>
    </main>
  );
}

export default AboutPage;
