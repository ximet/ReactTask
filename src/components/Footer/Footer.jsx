import React, { useEffect, useState } from 'react';
import styles from './Footer.scss';

function Footer() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <footer className={styles.footer}>
      <span>{date.toLocaleString()}</span>
    </footer>
  );
}

export default Footer;
