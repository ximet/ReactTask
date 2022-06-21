import React from 'react';

interface CurrentWeatherProps {
  currentData: string;
}
const CurrentWeather = (props: CurrentWeatherProps) => {
  return <div>{props.currentData}</div>;
};

export default CurrentWeather;
