import { connect } from 'react-redux';
import CurrentCityForecast from './CurrentCityForecast';
import { selectCurrentCityForecast } from '../../../redux/selectors/weatherSelectors';

const mapStateToProps = state => ({
  location: state.location,
  weather: selectCurrentCityForecast(state)
});

export default connect(mapStateToProps)(CurrentCityForecast);
