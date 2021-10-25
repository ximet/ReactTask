import { connect } from 'react-redux';
import DailyForecast from './DailyForecast';

const mapStateToProps = state => ({
  forecast: state.weather.dailyCityForecast
});

export default connect(mapStateToProps)(DailyForecast);
