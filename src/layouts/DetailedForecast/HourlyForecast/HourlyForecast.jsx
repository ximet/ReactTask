import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

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
        height={60}
      />
    </div>
  );
}

HourlyForecast.propTypes = {
  chartData: PropTypes.shape({
    time: PropTypes.arrayOf(PropTypes.string).isRequired,
    temperature: PropTypes.arrayOf(PropTypes.number).isRequired,
    wind: PropTypes.arrayOf(PropTypes.number).isRequired
  })
};

export default HourlyForecast;
