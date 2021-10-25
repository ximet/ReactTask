import { connect } from 'react-redux';
import FavoriteCities from './FavoriteCities';
import { getCityTitle } from '../../../redux/selectors/locationSelectors';

const mapStateToProps = state => {
  return {
    favoriteCities: state.location.recentCities,
    currentCity: getCityTitle(state)
  };
};

export default connect(mapStateToProps)(FavoriteCities);
