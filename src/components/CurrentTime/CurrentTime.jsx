import classes from './CurrentTime.module.scss';
import { useState, useEffect } from 'react';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toTimeString());

  useEffect(() => {
    setTimeout(() => {
      const dateObj = new Date();
      const hours = dateObj.getHours().toString().padStart(2, 0);
      const minutes = dateObj.getMinutes().toString().padStart(2, 0);
      const seconds = dateObj.getSeconds().toString().padStart(2, 0);
      const timeString = `${hours}:${minutes}:${seconds}`;

      setCurrentTime(timeString);
    }, 1000);
  }, [currentTime]);

  return <div className={classes.currentTime}>{currentTime}</div>;
}

export default CurrentTime;
