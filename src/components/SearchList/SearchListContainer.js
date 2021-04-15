import { connect } from 'react-redux';

import SearchList from './SearchList';
import { getLocationData } from '../../redux/actions/locations';
import {
  isLocationsLoadingSelector,
  transformLocations
} from '../../redux/selectors/locationsSelectors';

const mapStateToProps = state => ({
  locations: transformLocations(state),
  isLoading: isLocationsLoadingSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getLocationData: value => dispatch(getLocationData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
