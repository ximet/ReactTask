import React from 'react';
import classes from './SelectedDateTime.module.css';
import { formatDate } from '../../../services/dateService';

function SelectedDateTime({ currentDate }) {
  const date = formatDate(currentDate);

  return (
    <div className={classes.container}>
      <div className={classes.selectedTime}>{date.time}</div>
      <div>
        <span className={classes.selectedDate}>{date.date}</span>
      </div>
    </div>
  );
}

export default SelectedDateTime;
