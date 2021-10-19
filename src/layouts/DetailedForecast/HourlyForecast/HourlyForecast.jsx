import React from 'react';
import { Line } from 'react-chartjs-2';

import { HourlyChartData } from '../../../types/WeatherDataTypes';
import { hourlyChartOptions, getHourlyChartData } from '../../../utils/hourlyChartSettings';
import styles from './HourlyForecast.module.scss';

function HourlyForecast({ chartData }) {
  return (
    <div className={styles.hourlyForecast}>
      <h2 className={styles.hourlyForecastTitle}>Hourly Forecast</h2>
      <Line
        id={styles.hourlyForecastChart}
        data={getHourlyChartData(chartData)}
        options={hourlyChartOptions}
        height={90}
      />
    </div>
  );
}

HourlyForecast.propTypes = {
  chartData: HourlyChartData
};

export default HourlyForecast;
