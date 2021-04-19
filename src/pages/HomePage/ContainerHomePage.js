import { connect } from 'react-redux';
import {
  getMatchedCitiesData,
  matchedCitiesDataErase
} from '../../ReduxStore/actions/matchedCities';
import HomePage from './HomePage';

const mapStateToProps = state => {
  return {
    currentCity: state.currentCity.city,
    isLoaded: state.currentCity.isLoaded,
    cityName: state.currentCity.cityName,
    matchedCitiesData: state.matchedCities.cities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMatchedCitiesData: query => dispatch(getMatchedCitiesData(query)),
    eraseCitiesData: () => dispatch(matchedCitiesDataErase)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
