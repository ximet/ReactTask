import React from 'react';

interface DailyForecastProps {
  dailyForecastData: string;
}

const DailyForecast: React.FunctionComponent<DailyForecastProps> = ({ dailyForecastData }) => {
  return <div>{dailyForecastData}</div>;
};

export default DailyForecast;
