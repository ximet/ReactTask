import {
  API_SYMBOL_URL_POSTFIX,
  API_SYMBOL_URL_PREFIX,
  API_WIND_IMG_URL_POSTFIX,
  API_WIND_IMG_URL_PREFIX,
  WIND_DIRECTIONS_TO_IMG
} from '../../../constants/constants';
import { formatTemperature } from '../../../utils/utils';
import './LocationWeatherCurrent.css';

function LocationWeatherCurrent({ currentLocationWeather, currentLocationInfo }) {
  const locationName = currentLocationInfo ? currentLocationInfo.name : null;
  const locationCountry = currentLocationInfo ? currentLocationInfo.country : null;  
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
          <div className="location-weather__current-weather-temp-degrees">°C</div>
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
          alt={`${currentLocationWeather.windDirString} ${currentLocationWeather.windSpeed} m/s`}
          className="location-weather__current-weather-wing-img"
        />
        <div className="location-weather__current-weather-wind-value">
          {currentLocationWeather.windSpeed} m/s
        </div>
      </div>
    </>
  ) : null;

  return (
    <div className="location-weather__current">
      <h2 className="location-weather__current-title">
        Weather in
        <br />
        {locationName}, {locationCountry}
      </h2>
      <div className="location-weather__current-weather-box">{currentWeather}</div>
    </div>
  );
}

export default LocationWeatherCurrent;
