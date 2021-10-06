import classes from './CurrentTime.module.scss';
import { useState, useEffect } from 'react';
import { getFormatCurrentTime } from '../../utils/dateTimeUtils';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(() => getFormatCurrentTime());

  useEffect(() => {
    setTimeout(() => {
      const timeString = getFormatCurrentTime();

      setCurrentTime(timeString);
    }, 1000);
  }, [currentTime]);

  return <div className={classes.currentTime}>{currentTime}</div>;
}

export default CurrentTime;
