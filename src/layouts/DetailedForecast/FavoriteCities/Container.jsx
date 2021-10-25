import { connect } from 'react-redux';
import FavoriteCities from './FavoriteCities';
import { getCityCards } from '../../../redux/selectors/locationSelectors';

const mapStateToProps = state => {
  return {
    cityCards: getCityCards(state)
  };
};

export default connect(mapStateToProps)(FavoriteCities);
