import { connect } from 'react-redux';
import SelectedDateTime from './SelectedDateTime';

const mapStateToProps = state => ({
  timeZone: state.location.timezone
});

export default connect(mapStateToProps)(SelectedDateTime);
