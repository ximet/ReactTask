import { connect } from 'react-redux';
import FavoriteCities from './FavoriteCities';

const mapStateToProps = state => ({
  favoriteCities: state.location.recentCities,
  currentCity: state.location.currentCity
});

export default connect(mapStateToProps)(FavoriteCities);
