import React, { useEffect, useState } from 'react';
import styles from './Index.module.scss';

function Footer() {
  const [date, setDate] = useState('');

  const timerID = setInterval(() => setDate(new Date()), 1000);

  useEffect(() => {
  }, [timerID]);

  return (
    <footer className={`${styles.container} ${styles.footer}`}>
      <span className={styles.date}>
        {date.toLocaleString()}
      </span>
    </footer>
  );
}

export default Footer;
