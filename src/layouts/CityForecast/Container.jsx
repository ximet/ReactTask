import { connect } from 'react-redux';

import CityForecast from './CityForecast';
import { getCurrentBgImage } from '../../redux/selectors/themeSelectors';
import { getCityForecast } from '../../redux/selectors/weatherSelectors';
import { getCityInfo } from '../../redux/selectors/locationSelectors';

const mapStateToProps = state => ({
  cityForecast: getCityForecast(state),
  cityInfo: getCityInfo(state),
  themeBg: getCurrentBgImage(state)
});

export default connect(mapStateToProps)(CityForecast);
