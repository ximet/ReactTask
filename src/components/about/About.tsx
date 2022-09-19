import React, { FC } from 'react';

import commonStyle from '../../styles/commonStyles.css';
import styles from './About.css';
import classNames from 'classnames';

export const About: FC = () => {
  return (
    <main className={classNames(commonStyle['container'], styles['about-container'])}>
      <h2 className={styles['about-title']}>More info about our service</h2>
      <article className={styles['about-article']}>
        <h3 className={styles['about-article-title']}>What you can?</h3>
        <p>
          By default, you can see the weather in your city. <br />
          You can also find the city you need and find out what the weather is like there. <br />
          If you need a city all the time, you can add it to your favorites.
        </p>
      </article>
      <article className={styles['about-article']}>
        <h3 className={styles['about-article-title']}>How work with service?</h3>
        <p>
          The coolest thing is that you don't need to register. <br />
          To find the desired city, enter it in the search bar and click on the desired result.{' '}
          <br />
          To add a city to your favorites, click on the heart icon. <br />
          You can also click on this icon to remove the city from your favorites. <br />
          On the favorites page, click on the desired city to view detailed weather in that city.{' '}
          <br />
          On the main page with detailed weather information, select the number of days to see the
          weather for the future.
        </p>
      </article>
      <article className={styles['about-article']}>
        <h3 className={styles['about-article-title']}>Any suggestions or problems?</h3>
        <p>Please leave them on the feedback page</p>
      </article>
    </main>
  );
};