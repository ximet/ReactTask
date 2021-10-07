import classes from './CurrentTime.module.scss';
import { useState, useEffect } from 'react';
import { getFormattedCurrentTime } from '../../utils/dateTimeUtils';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(getFormattedCurrentTime);
  const delayClockTick = 1000;

  useEffect(() => {
    setTimeout(() => {
      const timeString = getFormattedCurrentTime();

      setCurrentTime(timeString);
    }, delayClockTick);
  }, [currentTime]);

  return <div className={classes.currentTime}>{currentTime}</div>;
}

export default CurrentTime;
