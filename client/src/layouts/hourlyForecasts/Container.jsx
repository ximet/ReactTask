import { connect } from 'react-redux';
import HourlyForecasts from './HourlyForecasts';

const mapStateToProps = state => ({
    hourlyForecasts: state.hourlyWeather.hourlyWeather
})

export default connect(mapStateToProps)(HourlyForecasts)