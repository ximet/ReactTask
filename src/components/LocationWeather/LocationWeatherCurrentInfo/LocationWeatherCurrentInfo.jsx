import {
  API_SYMBOL_URL_POSTFIX,
  API_SYMBOL_URL_PREFIX,
  API_WIND_IMG_URL_POSTFIX,
  API_WIND_IMG_URL_PREFIX,
  DEGREES_FULL_TEXT,
  WIND_DIRECTIONS_TO_IMG,
  WIND_SPEED_TEXT
} from '../../../constants/constants';
import { CurrentLocationInfoType, CurrentLocationWeatherType } from '../../../types/types';
import { formatTemperature } from '../../../utils/utils';
import './LocationWeatherCurrentInfo.css';
import PropTypes from 'prop-types';

function LocationWeatherCurrentInfo({
  currentLocationWeather,
  currentLocationInfo,
  addToSelectedLocations
}) {
  const locationId = currentLocationInfo ? currentLocationInfo.id : '';
  const locationName = currentLocationInfo ? currentLocationInfo.name : '';
  const locationCountry = currentLocationInfo ? currentLocationInfo.country : '';
  const currentWeather = currentLocationWeather ? (
    <>
      <div className="location-weather__current-weather-item location-weather__current-weather-title">
        Current:
      </div>
      <div className="location-weather__current-weather-temp location-weather__current-weather-item">
        <div className="location-weather__current-weather-item-label">Temperature:</div>
        <div className="location-weather__current-weather-temp-wrapper">
          <div className="location-weather__current-weather-temp-value">
            {formatTemperature(currentLocationWeather.temperature)}
          </div>
          <div className="location-weather__current-weather-temp-degrees">{DEGREES_FULL_TEXT}</div>
        </div>
      </div>
      <div className="location-weather__current-weather-symbol location-weather__current-weather-item">
        <div className="location-weather__current-weather-item-label">Cloudiness:</div>
        <img
          src={`${API_SYMBOL_URL_PREFIX}${currentLocationWeather.symbol}${API_SYMBOL_URL_POSTFIX}`}
          alt={currentLocationWeather.symbolPhrase}
          className="location-weather__current-weather-symbol-img"
        />
      </div>
      <div className="location-weather__current-weather-wind location-weather__current-weather-item">
        <div className="location-weather__current-weather-item-label">Wind:</div>
        <img
          src={`
              ${API_WIND_IMG_URL_PREFIX}${
            WIND_DIRECTIONS_TO_IMG[currentLocationWeather.windDirString]
          }${API_WIND_IMG_URL_POSTFIX}
            `}
          alt={`${currentLocationWeather.windDirString} ${currentLocationWeather.windSpeed} ${WIND_SPEED_TEXT}`}
          className="location-weather__current-weather-wing-img"
        />
        <div className="location-weather__current-weather-wind-value">
          {currentLocationWeather.windSpeed} {WIND_SPEED_TEXT}
        </div>
      </div>
    </>
  ) : (
    ''
  );

  return (
    <div className="location-weather__current">
      <h2 className="location-weather__current-title">
        Weather in
        <br />
        {locationName}, {locationCountry}
        <br />
        <button
          className="location-weather__add-btn"
          type="button"
          onClick={() => {
            addToSelectedLocations({
              id: String(locationId),
              locationInfo: currentLocationInfo,
              locationWeather: currentLocationWeather
            });
          }}
        >
          Add to selected
        </button>
      </h2>
      <div className="location-weather__current-weather-box">{currentWeather}</div>
    </div>
  );
}

LocationWeatherCurrentInfo.propTypes = {
  currentLocationWeather: CurrentLocationWeatherType,
  currentLocationInfo: CurrentLocationInfoType,
  addToSelectedLocations: PropTypes.func.isRequired
};

LocationWeatherCurrentInfo.defaultProps = {
  currentLocationWeather: null,
  currentLocationInfo: null
};

export default LocationWeatherCurrentInfo;
