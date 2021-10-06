import classes from './CurrentTime.module.scss';
import { useState, useEffect } from 'react';
import { getFormatedCurrentTime } from '../../utils/dateTimeUtils';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(() => getFormatedCurrentTime());

  useEffect(() => {
    setTimeout(() => {
      const timeString = getFormatedCurrentTime();

      setCurrentTime(timeString);
    }, 1000);
  }, [currentTime]);

  return <div className={classes.currentTime}>{currentTime}</div>;
}

export default CurrentTime;
