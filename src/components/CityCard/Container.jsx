import { connect } from 'react-redux';

import CityCard from './CityCard';
import { changeLocation } from '../../redux/actions/locationActions';

const mapDispatchToProps = dispatch => {
  return {
    setNewLocation: cityInfo => dispatch(changeLocation(cityInfo))
  };
};

export default connect(null, mapDispatchToProps)(CityCard);
