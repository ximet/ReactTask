import { connect } from 'react-redux';

import SearchList from './SearchList';
import { getLocationData } from '../../redux/actions/locations';

const mapStateToProps = state => {
  const {
    locations: { locations, isLoading }
  } = state;
  return { locations, isLoading };
};

const mapDispatchToProps = dispatch => ({
  getLocationData: value => dispatch(getLocationData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
