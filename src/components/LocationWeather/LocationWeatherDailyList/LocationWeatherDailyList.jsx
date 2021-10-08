import PropTypes from 'prop-types';
import { CurrentLocationDailyWeatherType } from '../../../types/types';
import LocationWeatherDailyListItem from '../LocationWeatherDailyListItem/LocationWeatherDailyListItem';

import './LocationWeatherDailyList.css';

function LocationWeatherDailyList({
  currentLocationDailyWeather,
  activeDayDate,
  setActiveDayDate
}) {
  return (
    <ul className="location-weather__daily-list">
      {currentLocationDailyWeather
        ? currentLocationDailyWeather.map(dayData => {
            return (
              <LocationWeatherDailyListItem
                key={dayData.date}
                dayData={dayData}
                isActive={activeDayDate === new Date(dayData.date).setHours(0, 0, 0, 0)}
                setActiveDayDate={setActiveDayDate}
              />
            );
          })
        : ''}
    </ul>
  );
}

LocationWeatherDailyList.propTypes = {
  currentLocationDailyWeather: CurrentLocationDailyWeatherType,
  activeDayDate: PropTypes.number, //timestamp
  setActiveDayDate: PropTypes.func.isRequired
};

export default LocationWeatherDailyList;
