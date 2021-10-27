import { connect } from 'react-redux';

import HourlyForecast from './HourlyForecast';
import { selectHourlyChartData } from '../../../redux/selectors/weatherSelectors';

const mapStateToProps = state => ({
  chartData: selectHourlyChartData(state)
});

export default connect(mapStateToProps)(HourlyForecast);
