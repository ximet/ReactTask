import LocationWeatherDetailedListItem from '../LocationWeatherDetailedListItem/LocationWeatherDetailedListItem';

import './LocationWeatherDetailedList.css';

function LocationWeatherDetailedList({ currentLocationDetailedWeather, activeDayDate }) {
  function mapData(detailedData) {
    return (
      <LocationWeatherDetailedListItem
        key={detailedData.time}
        detailedData={detailedData}
      />
    );
  }

  function filterData(detailedData) {
    return detailedData.time.includes(activeDayDate);
  }

  const detailedList = currentLocationDetailedWeather
    ? currentLocationDetailedWeather.filter(filterData).map(mapData)
    : null;

  return (
    <ul className="location-weather__detailed-list">
      {currentLocationDetailedWeather ? detailedList : null}
    </ul>
  );
}

export default LocationWeatherDetailedList;
