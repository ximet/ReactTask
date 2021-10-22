import { connect } from 'react-redux';

import CityForecast from './CityForecast';
import { getCurrentBgImage } from '../../redux/selectors/themeSelectors';
import { getCityForecast } from '../../redux/selectors/weatherSelectors';
import { getCityInfo } from '../../redux/selectors/locationSelectors';

const mapStateToProps = state => {
  const { relHumidity, symbol, symbolPhrase, temperature, windSpeed } = getCityForecast(state);
  const { name, country } = getCityInfo(state);

  return {
    cityForecast: { relHumidity, symbol, symbolPhrase, temperature, windSpeed },
    cityInfo: { name, country },
    themeBg: getCurrentBgImage(state)
  };
};

export default connect(mapStateToProps)(CityForecast);
