import { useEffect, useState } from 'react';
import styles from './header&footer.scss';

export default function MyFooter() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const interval = setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);
  useEffect(() => {
    return () => {
      console.log('test');
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.appfooter}>
      <h3>{currentTime}</h3>
    </div>
  );
}
