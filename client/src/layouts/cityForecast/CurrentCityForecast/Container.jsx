import { connect } from 'react-redux';
import CurrentCityForecast from './CurrentCityForecast';

const mapStateToProps = state => ({
  location: state.location.location,
  weather: state.currentWeather.currentWeather
});

export default connect(mapStateToProps)(CurrentCityForecast);
