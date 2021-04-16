import { connect } from 'react-redux';
import {
  getMatchedCitiesData,
  MATCHED_CITIES_DATA_ERASE
} from '../../ReduxStore/actions/matchedCities';
import HomePage from './HomePage';

const MapStateToProps = state => {
  return {
    currentCity: state.currentCity.city,
    isLoaded: state.currentCity.isLoaded,
    cityName: state.currentCity.cityName,
    matchedCitiesData: state.matchedCities.cities
  };
};

const MapDispatchToProps = dispatch => {
  return {
    getMatchedCitiesData: query => dispatch(getMatchedCitiesData(query)),
    eraseCitiesData: () => dispatch({ type: MATCHED_CITIES_DATA_ERASE })
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(HomePage);
