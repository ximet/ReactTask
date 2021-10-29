import { connect } from 'react-redux';

import HourlyForecast from './HourlyForecast';
import {
  selectHourlyChartData,
  getTemperatureUnit
} from '../../../redux/selectors/weatherSelectors';

const mapStateToProps = state => ({
  chartData: selectHourlyChartData(state),
  temperatureUnit: getTemperatureUnit(state)
});

export default connect(mapStateToProps)(HourlyForecast);
