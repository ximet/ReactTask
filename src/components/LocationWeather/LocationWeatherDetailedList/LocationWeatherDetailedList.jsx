import LocationWeatherDetailedListItem from '../LocationWeatherDetailedListItem/LocationWeatherDetailedListItem';

import './LocationWeatherDetailedList.css';

function LocationWeatherDetailedList({ currentLocationDetailedWeather, activeDayDate }) {
  return (
    <ul className="location-weather__detailed-list">
      {currentLocationDetailedWeather
        ? currentLocationDetailedWeather
            .filter(
              detailedData => new Date(detailedData.time).setHours(0, 0, 0, 0) === activeDayDate
            )
            .map(detailedData => (
              <LocationWeatherDetailedListItem
                key={detailedData.time}
                detailedData={detailedData}
              />
            ))
        : ''}
    </ul>
  );
}

export default LocationWeatherDetailedList;
