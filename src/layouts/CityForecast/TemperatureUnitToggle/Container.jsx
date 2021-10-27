import { connect } from 'react-redux';
import { setTemperatureUnit } from '../../../redux/actions/weatherActions';
import TemperatureUnitToggle from './TemperatureUnitToggle';
import { UNIT_SYMBOLS } from '../../../constants/units';

const TemperatureUnitToggleContainer = ({ temperatureUnit, changeTemperatureUnit }) => {
  function switchUnit() {
    const currentUnit =
      temperatureUnit === UNIT_SYMBOLS.celsius ? UNIT_SYMBOLS.fahrenheit : UNIT_SYMBOLS.celsius;
    changeTemperatureUnit(currentUnit);
  }

  return <TemperatureUnitToggle unit={temperatureUnit} switchUnit={switchUnit} />;
};

const mapStateToProps = state => ({
  temperatureUnit: state.weather.temperatureUnit
});

const mapDispatchToProps = dispatch => {
  return {
    changeTemperatureUnit: unit => dispatch(setTemperatureUnit(unit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureUnitToggleContainer);
