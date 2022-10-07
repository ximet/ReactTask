import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

import { getTime } from '../helper/helper.js';

const FOOTER_TIME_LABEL = 'Current time:';

const Footer = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <p>
        {FOOTER_TIME_LABEL} {time}
      </p>
    </footer>
  );
};

export default Footer;
