import PropTypes from 'prop-types';
import {
  API_SYMBOL_URL_POSTFIX,
  API_SYMBOL_URL_PREFIX,
  DEGREES_TEXT
} from '../../../constants/constants';
import { DayDataType } from '../../../types/types';
import { formatTemperature } from '../../../utils/utils';
import './LocationWeatherDailyListItem.css';

function LocationWeatherDailyListItem({ dayData, isActive, setActiveDayDate }) {
  const date = new Date(dayData.date);
  const dayName = date.toLocaleString('en-us', { weekday: 'long' });
  const dayNumber = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  return (
    <li
      className={[
        'location-weather__daily-list-item',
        isActive ? 'location-weather__daily-list-item_active' : ''
      ].join(' ')}
      onClick={() => setActiveDayDate(dayData.date)}
    >
      <div className="location-weather__daily-list-item-day-name">{dayName}</div>
      <div className="location-weather__daily-list-item-day-number">{dayNumber}</div>
      <div className="location-weather__daily-list-item-month">{month}</div>
      <img
        src={`${API_SYMBOL_URL_PREFIX}${dayData.symbol}${API_SYMBOL_URL_POSTFIX}`}
        alt={dayData.date}
        className="location-weather__daily-list-item-symbol-img"
      />
      <div className="location-weather__daily-list-item-temperature">
        <div className="location-weather__daily-list-item-minmax-temperature">
          {`${formatTemperature(dayData.minTemp)}${DEGREES_TEXT}`}
        </div>
        <div className="location-weather__daily-list-item-minmax-temperature">{' ... '}</div>
        <div className="location-weather__daily-list-item-minmax-temperature">
          {`${formatTemperature(dayData.maxTemp)}${DEGREES_TEXT}`}
        </div>
      </div>
    </li>
  );
}

LocationWeatherDailyListItem.propTypes = {
  dayData: DayDataType.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActiveDayDate: PropTypes.func.isRequired
};

export default LocationWeatherDailyListItem;
