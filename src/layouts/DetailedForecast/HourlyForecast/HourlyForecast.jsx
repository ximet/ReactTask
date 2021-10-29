import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import {
  hourlyChartOptions,
  getHourlyChartData,
  CHART_HEIHGT
} from '../../../utils/hourlyChartSettings';
import { UNIT_SYMBOLS } from '../../../constants/units';
import styles from './HourlyForecast.module.scss';

function HourlyForecast({ chartData, temperatureUnit }) {
  return (
    <div className={styles.hourlyForecast}>
      <h2 className={styles.hourlyForecastTitle}>Hourly Forecast</h2>
      <Line
        id={styles.hourlyForecastChart}
        data={getHourlyChartData(chartData, temperatureUnit)}
        options={hourlyChartOptions}
        height={CHART_HEIHGT}
      />
    </div>
  );
}

HourlyForecast.defaultProps = {
  temperatureUnit: UNIT_SYMBOLS.celsius
};

HourlyForecast.propTypes = {
  chartData: PropTypes.shape({
    time: PropTypes.arrayOf(PropTypes.string).isRequired,
    temperature: PropTypes.arrayOf(PropTypes.number).isRequired,
    wind: PropTypes.arrayOf(PropTypes.number).isRequired,
    temperatureUnit: PropTypes.string
  })
};

export default HourlyForecast;
