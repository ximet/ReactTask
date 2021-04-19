import { connect } from 'react-redux';
import {
  getMatchedCitiesData,
  matchedCitiesDataErase
} from '../../ReduxStore/actions/matchedCities';
import {
  getCurrentCity,
  getCurrentCityName,
  getIsLoaded
} from '../../ReduxStore/selectors/currentCitySelectors';
import { transformCitiesData } from '../../ReduxStore/selectors/matchedCitiesSelectors';
import HomePage from './HomePage';

const mapStateToProps = state => {
  return {
    currentCity: getCurrentCity(state),
    isLoaded: getIsLoaded(state),
    cityName: getCurrentCityName(state),
    matchedCitiesData: transformCitiesData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMatchedCitiesData: query => dispatch(getMatchedCitiesData(query)),
    eraseCitiesData: () => dispatch(matchedCitiesDataErase)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
