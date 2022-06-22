import React from 'react';

interface DailyForecastProps {
  dailyForecastData: string;
}

const DailyForecast = (props: DailyForecastProps) => {
  return <div>{props.dailyForecastData}</div>;
};

export default DailyForecast;
