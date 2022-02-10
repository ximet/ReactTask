import React from 'react';
import classes from './DailyItem.module.css';

function DailyItem(props) {
  const { date, weatherSymbol, day } = props;

  return (
    <>
      <p className={classes.daily_weather__main_text}>{date}</p>
      <div className={classes.image_wrapper}>
        <img className={classes.image} alt="symbol" src={weatherSymbol} />
      </div>
      <p className={classes.daily_weather__main_text}>
        {`${day.maxTemp}`}&deg; {`${day.minTemp}`}&deg;
      </p>
      <p className={classes.daily_weather__phrase}>{`${day.symbolPhrase}`}</p>
    </>
  );
}

export default DailyItem;
