import React from 'react';

interface CurrentWeatherProps {
  currentData: string;
}
const CurrentWeather: React.FunctionComponent<CurrentWeatherProps> = ({ currentData }) => {
  return <div>{currentData}</div>;
};

export default CurrentWeather;
