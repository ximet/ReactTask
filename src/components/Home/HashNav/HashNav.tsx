import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from './HashNav.module.scss';

const HashNav: React.FunctionComponent = () => {
  return (
    <nav className={styles.hashNav}>
      <ul className={styles.container}>
        <li className={styles.link}>
          <HashLink to={'#current'} smooth>
            #Current weather
          </HashLink>
        </li>
        <li className={styles.link}>
          <HashLink to={'#hourly'} smooth>
            #Hourly forecast
          </HashLink>
        </li>
        <li className={styles.link}>
          <HashLink to={'#7day'} smooth>
            #7 day forecast
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default HashNav;
