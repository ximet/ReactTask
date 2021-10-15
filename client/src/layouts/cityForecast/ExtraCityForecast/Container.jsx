import { connect } from 'react-redux';
import ExtraCityForecast from './ExtraCityForecast';

const mapStateToProps = state => ({
  weather: state.currentWeather.currentWeather
});

export default connect(mapStateToProps)(ExtraCityForecast);
