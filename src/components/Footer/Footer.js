import React, { useState, useEffect } from 'react';
import * as styles from '../../styles/Footer.module.css';
import * as darkStyles from '../../styles/dark_mode/FooterDark.module.css';

function Footer(props) {
  const [time, setTime] = useState(null);

  const footerSpan = <span>Current time: {time}</span>;

  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentTime = () => {
    const date = new Date();
    const hours = timeZeroCheck(date.getHours());
    const minutes = timeZeroCheck(date.getMinutes());
    const seconds = timeZeroCheck(date.getSeconds());

    const currentTime = `${hours}:${minutes}:${seconds}`;
    return currentTime;
  };

  const timeZeroCheck = input => {
    if (input < 10) {
      return `0${input}`;
    } else {
      return input;
    }
  };

  return <footer className={props.darkMode ? darkStyles.footer : styles.footer}>{footerSpan}</footer>;
}

export { Footer };
