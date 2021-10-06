import classes from './CurrentTime.module.scss';
import { useState, useEffect } from 'react';
import { getFormattedCurrentTime } from '../../utils/dateTimeUtils';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(getFormattedCurrentTime);

  useEffect(() => {
    setTimeout(() => {
      const timeString = getFormattedCurrentTime();

      setCurrentTime(timeString);
    }, 1000);
  }, [currentTime]);

  return <div className={classes.currentTime}>{currentTime}</div>;
}

export default CurrentTime;
