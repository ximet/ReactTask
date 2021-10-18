import PropTypes from 'prop-types';
import {
  API_SYMBOL_URL_POSTFIX,
  API_SYMBOL_URL_PREFIX,
  API_WIND_IMG_URL_POSTFIX,
  API_WIND_IMG_URL_PREFIX,
  LOCATIONS_PAGE_LINK,
  WIND_DIRECTIONS_TO_IMG
} from '../../../constants/constants';
import { SelectedLocationType } from '../../../types/types';
import { formatTemperature } from '../../../utils/utils';
import './SelectedLocationsListItem.css';

function SelectedLocationsListItem({ locationData, deleteSelectedLocation }) {
  const { id, locationInfo, locationWeather } = locationData;
  return locationInfo && locationWeather ? (
    <li className="selected-locations__list-item">
      <a href={`${LOCATIONS_PAGE_LINK}/${id}`} className="selected-locations__list-item-link">
        <h3 className="selected-locations__list-item-title">{locationInfo.name}</h3>
        <div className="selected-locations__list-info-wrapper">
          <img
            src={`${API_SYMBOL_URL_PREFIX}${locationWeather.symbol}${API_SYMBOL_URL_POSTFIX}`}
            alt={locationWeather.symbolPhrase}
            className="selected-locations__list-item-symbol-img"
          />
          <div className="selected-locations__list-item-temperature">
            {`${formatTemperature(locationWeather.temperature)}°`}
          </div>
          <div className="selected-locations__list-item-wind-wrapper">
            <img
              src={`${API_WIND_IMG_URL_PREFIX}${
                WIND_DIRECTIONS_TO_IMG[locationWeather.windDirString]
              }${API_WIND_IMG_URL_POSTFIX}`}
              alt={`${locationWeather.windDirString} ${locationWeather.windSpeed} m/s`}
              className="selected-locations__list-item-wind-img"
            />
            <div className="selected-locations__list-item-wind-speed">
              {locationWeather.windSpeed} m/s
            </div>
          </div>
        </div>
      </a>
      <button
        className="selected-locations__list-item-remove-btn"
        type="button"
        onClick={() => deleteSelectedLocation(id)}
      >
        Remove
      </button>
    </li>
  ) : (
    ''
  );
}

SelectedLocationsListItem.propTypes = {
  locationData: SelectedLocationType.isRequired,
  deleteSelectedLocation: PropTypes.func.isRequired
};

export default SelectedLocationsListItem;
