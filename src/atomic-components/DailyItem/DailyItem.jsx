import React from 'react';
import classes from './DailyItem.module.css';

function DailyItem(props) {
  const { date, weatherSymbol, day } = props;

  return (
    <>
      <p className={classes.daily_weather__main_text}>{date}</p>
      <img className={classes.image} alt="symbol" src={weatherSymbol} />
      <p className={classes.daily_weather__main_text}>
        {`${day.maxTemp}`}&deg; {`${day.minTemp}`}&deg;
      </p>
      <p className={classes.daily_weather__secondary_text}>Speed: {day.maxWindSpeed} m/s</p>
    </>
  );
}

export default DailyItem;
