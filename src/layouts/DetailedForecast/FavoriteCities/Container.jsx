import { connect } from 'react-redux';
import FavoriteCities from './FavoriteCities';
import { selectCityCards } from '../../../redux/selectors/locationSelectors';

const mapStateToProps = state => {
  return {
    cityCards: selectCityCards(state)
  };
};

export default connect(mapStateToProps)(FavoriteCities);
