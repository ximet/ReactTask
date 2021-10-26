import { connect } from 'react-redux';
import DailyForecast from './DailyForecast';
import { selectDailyForecastCards } from '../../../redux/selectors/weatherSelectors';

const mapStateToProps = state => ({
  forecast: selectDailyForecastCards(state)
});

export default connect(mapStateToProps)(DailyForecast);
