import { connect } from 'react-redux';
import DailyForecasts from './DailyForecasts';

const mapStateToProps = state => ({
  dailyForecasts: state.dailyWeather
});

export default connect(mapStateToProps)(DailyForecasts);
