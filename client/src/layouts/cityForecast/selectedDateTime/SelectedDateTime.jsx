import React from 'react';
import classes from './selectedDatiTime.module.css'

function SelectedDateTime({ currentCityData }) {

  const date = `${currentCityData.weekDay} ${currentCityData.day} ${currentCityData.month} ${currentCityData.year}`

  return (
    <div>
      <div className={classes.selectedTime}>{currentCityData.time}</div>
      <div>
        <span className={classes.selectedDate}>{date}</span>
      </div>
    </div>
  )
}

export default SelectedDateTime;
