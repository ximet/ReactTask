import { connect } from 'react-redux';

import { getCorrectHourlyData } from '../../../utils/hourlyChartSettings';
import { HourlyCityForecastTypes } from '../../../types/WeatherDataTypes';

import HourlyForecast from './HourlyForecast';

function HourlyForecastContainer({ hourlyForecast }) {
  const correctHourlyData = getCorrectHourlyData(hourlyForecast);

  return <HourlyForecast chartData={correctHourlyData} />;
}

HourlyForecastContainer.propTypes = {
  hourlyForecast: HourlyCityForecastTypes
};

const mapStateToProps = state => ({
  hourlyForecast: state.weather.hourlyCityForecast
});

export default connect(mapStateToProps)(HourlyForecastContainer);
