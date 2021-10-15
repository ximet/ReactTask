import { connect } from 'react-redux';
import SelectedDateTime from './SelectedDateTime';

const mapStateToProps = state => ({
  currentDate: state.currentWeather.currentWeather.time
});

export default connect(mapStateToProps)(SelectedDateTime);
