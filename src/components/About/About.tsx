import { Title } from 'components';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Theme, ThemeContext, ThemeContextConfig } from 'store';
import styles from './About.module.scss';

const About: React.FunctionComponent = () => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  return (
    <main className={styles.mainContainer}>
      <Title title="About the app" />
      <section className={styles.sectionContainer}>
        <article className={styles.article}>
          <p className={styles.aboutUs}>
            Our brand mission is to make quality weather information available to every person on
            this planet. No matter where you live in the world or how obscure an activity you
            require weather information for - we will provide you with as much relevant, local
            weather data as we can uncover.
          </p>
        </article>
        <article className={styles.article}>
          <h3>Creator</h3>
          <p className={styles.aboutUs}>
            The app was created by Živilė, Coherent Solutions Front End trainee.
          </p>
        </article>
        <article className={styles.article}>
          <h3>Contact us</h3>
          <p className={styles.aboutUs}>
            If you have any questions about the app and want to send us a message go to{' '}
            <Link to="/contacts">Contacts</Link> page.
          </p>
        </article>
        <article className={styles.article}>
          <h3>Weather data provider</h3>
          <p>The app was created using Foreca API data.</p>
          <a href="https://www.foreca.com/" target={'_blank'}>
            <img
              height={'50px'}
              src={`https://f.hubspotusercontent40.net/hubfs/4979099/logo/Foreca_logo_${
                theme === Theme.DARK ? 'W' : 'B'
              }RC.png`}
            />
          </a>
        </article>
      </section>
    </main>
  );
};

export default About;
