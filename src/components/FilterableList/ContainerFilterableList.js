import { connect } from 'react-redux';
import FilterableList from './FilterableList';
import { getCurrentCityData, SET_CURRENT_CITY_NAME } from '../../ReduxStore/actions/currentCity';

const MapDispatchToProps = dispatch => {
  return {
    getCurrentCityData: id => dispatch(getCurrentCityData(id)),
    setCurrentCityName: name => dispatch({ type: SET_CURRENT_CITY_NAME, payload: name })
  };
};

export default connect(null, MapDispatchToProps)(FilterableList);
