import React, { useState, useEffect } from 'react';
import classes from './SelectedDateTime.module.css';
import { formatDate } from '../../../services/dateService';
import PropTypes from 'prop-types';
import { updatingTimeInterval } from '../../../globalConsts';
import { getCurrentTimeByTimeZone } from '../../../services/dateService';

function SelectedDateTime({ timeZone }) {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(getInitialDate());
    const intervalId = setInterval(() => {
      setDate(getInitialDate());
    }, updatingTimeInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeZone]);

  function getInitialDate() {
    const date = getCurrentTimeByTimeZone(timeZone);

    return formatDate(date);
  }

  return (
    <div className={classes.container}>
      <div className={classes.selectedTime}>{date.time}</div>
      <div>
        <span className={classes.selectedDate}>{date.date}</span>
      </div>
    </div>
  );
}

SelectedDateTime.propTypes = {
  timeZone: PropTypes.string.isRequired
};

export default SelectedDateTime;
