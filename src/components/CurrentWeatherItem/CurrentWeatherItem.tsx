import React from 'react';

import './CurrentWeatherItem.scss';

interface ICurrentWeatherItemProps {
  name: string;
  data: string;
}

function CurrentWeatherItem({ name, data }: ICurrentWeatherItemProps) {
  return (
    <div className="current__weather-item">
      <span className="current__weather-item-bold" data-testid="data">{data}</span>
      <span data-testid="name">{name}</span>
    </div>
  );
}

export default CurrentWeatherItem;
