import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  hourlyChartOptions,
  hourlyChartData,
  getCorrectHourlyChartData
} from '../../../utils/hourlyChartSettings';

import styles from './HourlyForecast.module.scss';

function HourlyForecast({ hourlyForecast }) {
  const chartData = getCorrectHourlyChartData(hourlyForecast.forecast);

  return (
    <div className={styles.hourlyForecast}>
      <h2 className={styles.hourlyForecastTitle}>Hourly Forecast</h2>
      <Line
        id={styles.hourlyForecastChart}
        data={hourlyChartData(chartData)}
        options={hourlyChartOptions}
        height={90}
      />
    </div>
  );
}

export default HourlyForecast;
