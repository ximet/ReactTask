import React from 'react';
import classes from './SelectedDateTime.module.css';
import { formatDate } from '../../../services/dateService';
import PropTypes from 'prop-types';

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

SelectedDateTime.propTypes = {
  currentDate: PropTypes.string.isRequired
};

export default SelectedDateTime;
