import { connect } from 'react-redux';
import FavoriteCities from './FavoriteCities';
import { getCityInfo } from '../../../redux/selectors/locationSelectors';

const mapStateToProps = state => {
  const { id, name, country } = getCityInfo(state);

  return {
    favoriteCities: state.location.recentCities,
    currentCity: { id, name, country }
  };
};

export default connect(mapStateToProps)(FavoriteCities);
