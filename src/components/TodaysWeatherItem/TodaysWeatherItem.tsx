import React from 'react';
import { TodaysWeatherItemInterface } from '../../interfaces/interfaces';

import './TodaysWeatherItem.scss';

interface TodaysWeatherItemProps {
  data: TodaysWeatherItemInterface;
}

function TodaysWeatherItem({ data: { time, temperature, symbol } }: TodaysWeatherItemProps) {
  const dateOptions: Intl.DateTimeFormatOptions = { hour: 'numeric' };
  const date = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(time));

  return (
    <div className="todays__card">
      <div className="todays__card-title">{date}</div>
      <img className="todays__card-img" src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`} alt="weather" />
      <div className="todays__card-temperature">{`${temperature}°C`}</div>
    </div>
  );
}

export default TodaysWeatherItem;
