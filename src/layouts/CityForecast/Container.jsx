import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { THEMES, BG_IMAGES } from '../../constants/themes';
import CityForecast from './CityForecast';
import { getCurrentBgImage } from '../../redux/selectors/themeSelectors';

const mapStateToProps = state => ({
  cityForecast: state.weather.cityForecast,
  cityInfo: state.location.currentLocation,
  themeBg: getCurrentBgImage(state)
});

export default connect(mapStateToProps)(CityForecast);
