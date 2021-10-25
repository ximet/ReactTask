import { connect } from 'react-redux';
import DailyForecast from './DailyForecast';
import { getDailyForecastCards } from '../../../redux/selectors/weatherSelectors';

const mapStateToProps = state => ({
  forecast: getDailyForecastCards(state)
});

export default connect(mapStateToProps)(DailyForecast);
