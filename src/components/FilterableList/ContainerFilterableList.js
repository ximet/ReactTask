import { connect } from 'react-redux';
import FilterableList from './FilterableList';
import { getCurrentCityData, setCurrentCityName } from '../../ReduxStore/actions/currentCity';

const mapDispatchToProps = dispatch => {
  return {
    getCurrentCityData: id => dispatch(getCurrentCityData(id)),
    setCurrentCityName: name => dispatch(setCurrentCityName(name))
  };
};

export default connect(null, mapDispatchToProps)(FilterableList);
