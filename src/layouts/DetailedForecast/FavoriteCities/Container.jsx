import { connect } from 'react-redux';
import FavoriteCities from './FavoriteCities';

const mapStateToProps = state => ({
  favoriteCities: state.location.recentCities
});

export default connect(mapStateToProps)(FavoriteCities);
