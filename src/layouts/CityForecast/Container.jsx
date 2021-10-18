import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { THEMES, BG_IMAGES } from '../../constants/themes';
import { CityForecastTypes, CityInfoTypes } from '../../types/WeatherDataTypes';
import CityForecast from './CityForecast';

function CityForecastContainer({ cityForecast, cityInfo, theme }) {
  const themeBg = theme === THEMES.light ? BG_IMAGES.light : BG_IMAGES.dark;

  return <CityForecast cityForecast={cityForecast} cityInfo={cityInfo} themeBg={themeBg} />;
}

CityForecastContainer.propTypes = {
  cityForecast: CityForecastTypes,
  cityInfo: CityInfoTypes,
  theme: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  cityForecast: state.weather.cityForecast,
  cityInfo: state.location.currentLocation
});

export default connect(mapStateToProps)(CityForecastContainer);
