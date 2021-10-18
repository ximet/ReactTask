import { connect } from 'react-redux';
import CurrentCityForecast from './CurrentCityForecast';

const mapStateToProps = state => ({
  location: state.location,
  weather: state.currentWeather
});

export default connect(mapStateToProps)(CurrentCityForecast);
