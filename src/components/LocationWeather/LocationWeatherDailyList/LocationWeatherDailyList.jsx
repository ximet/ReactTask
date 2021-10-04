import LocationWeatherDailyListItem from '../LocationWeatherDailyListItem/LocationWeatherDailyListItem';

import './LocationWeatherDailyList.css';

function LocationWeatherDailyList({
  currentLocationDailyWeather,
  activeDayDate,
  setActiveDayDate
}) {
  function mapDayData(dayData) {
    return (
      <LocationWeatherDailyListItem
        key={dayData.date}
        dayData={dayData}
        activeDayDate={activeDayDate}
        setActiveDayDate={setActiveDayDate}
      />
    );
  }

  const dailyList = currentLocationDailyWeather
    ? currentLocationDailyWeather.map(mapDayData)
    : null;
  return (
    <ul className="location-weather__daily-list">
      {currentLocationDailyWeather ? dailyList : null}
    </ul>
  );
}

export default LocationWeatherDailyList;
