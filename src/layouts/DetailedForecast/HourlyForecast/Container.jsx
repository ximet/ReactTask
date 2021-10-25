import { connect } from 'react-redux';

import HourlyForecast from './HourlyForecast';
import { getHourlyChartData } from '../../../redux/selectors/weatherSelectors';

const mapStateToProps = state => ({
  chartData: getHourlyChartData(state)
});

export default connect(mapStateToProps)(HourlyForecast);
