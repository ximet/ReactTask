import PropTypes from 'prop-types';
import {
  API_SYMBOL_URL_POSTFIX,
  API_SYMBOL_URL_PREFIX,
  API_WIND_IMG_URL_POSTFIX,
  API_WIND_IMG_URL_PREFIX,
  DEGREES_TEXT,
  WIND_DIRECTIONS_TO_IMG,
  WIND_SPEED_TEXT
} from '../../../constants/constants';
import { DetailedDataType } from '../../../types/types';
import { formatTemperature } from '../../../utils/utils';
import './LocationWeatherDetailedListItem.css';

function LocationWeatherDetailedListItem({ detailedData }) {
  const date = new Date(detailedData.time);
  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <li className="location-weather__detailed-list-item">
      <div className="location-weather__detailed-list-item-time">{time}</div>
      <img
        src={`${API_SYMBOL_URL_PREFIX}${detailedData.symbol}${API_SYMBOL_URL_POSTFIX}`}
        alt={detailedData.time}
        className="location-weather__detailed-list-item-symbol-img"
      />
      <div className="location-weather__detailed-list-item-temperature">
        {`${formatTemperature(detailedData.temperature)}${DEGREES_TEXT}`}
      </div>
      <img
        src={`${API_WIND_IMG_URL_PREFIX}${
          WIND_DIRECTIONS_TO_IMG[detailedData.windDirString]
        }${API_WIND_IMG_URL_POSTFIX}`}
        alt={`${detailedData.windDirString} ${detailedData.windSpeed} ${WIND_SPEED_TEXT}`}
        className="location-weather__detailed-list-item-wing-img"
      />
      <div className="location-weather__detailed-list-item-wind-speed">
        {detailedData.windSpeed} {WIND_SPEED_TEXT}
      </div>
    </li>
  );
}

LocationWeatherDetailedListItem.propTypes = {
  detailedData: DetailedDataType.isRequired
};

export default LocationWeatherDetailedListItem;
