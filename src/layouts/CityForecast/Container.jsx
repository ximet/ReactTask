import { connect } from 'react-redux';

import CityForecast from './CityForecast';
import { getCurrentBgImage } from '../../redux/selectors/themeSelectors';
import { getShortCityForecast } from '../../redux/selectors/weatherSelectors';
import { getCityTitle } from '../../redux/selectors/locationSelectors';

const mapStateToProps = state => {
  return {
    cityForecast: getShortCityForecast(state),
    cityInfo: getCityTitle(state),
    themeBg: getCurrentBgImage(state)
  };
};

export default connect(mapStateToProps)(CityForecast);
