import { connect } from 'react-redux';

import CityForecast from './CityForecast';
import { getCurrentBgImage } from '../../redux/selectors/themeSelectors';
import { selectShortCityForecast } from '../../redux/selectors/weatherSelectors';
import { selectCityTitle } from '../../redux/selectors/locationSelectors';

const mapStateToProps = state => {
  return {
    cityForecast: selectShortCityForecast(state),
    cityInfo: selectCityTitle(state),
    themeBg: getCurrentBgImage(state)
  };
};

export default connect(mapStateToProps)(CityForecast);
