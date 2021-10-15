import { connect } from 'react-redux';
import DailyForecasts from './DailyForecasts';

const mapStateToProps = state => ({
    dailyForecasts: state.dailyWeather.dailyWeather
})

export default connect(mapStateToProps)(DailyForecasts)