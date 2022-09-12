import { useEffect, useState } from 'react';
import styles from '../styles.scss';

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.appfooter}>
      <p>{currentTime}</p>
    </div>
  );
}
export default Footer;
