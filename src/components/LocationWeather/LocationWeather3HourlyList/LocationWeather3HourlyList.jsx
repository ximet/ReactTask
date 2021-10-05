import LocationWeather3HourlyListItem from '../LocationWeather3HourlyListItem/LocationWeather3HourlyListItem';

import './LocationWeather3HourlyList.css';

function LocationWeather3HourlyList({ currentLocation3HourlyWeather, activeDayDate}) {
  function map3HourlyData(threeHourlyData) {
    return (
      <LocationWeather3HourlyListItem
        key={threeHourlyData.time}
        threeHourlyData={threeHourlyData}                
      />
    );
  }

  function filter3HourlyData(threeHourlyData) {
    return threeHourlyData.time.includes(activeDayDate);
  }
  

  const threeHourlyList = currentLocation3HourlyWeather
    ? currentLocation3HourlyWeather.filter(filter3HourlyData).map(map3HourlyData)
    : null;

  return (
    <ul className="location-weather__3hourly-list">
      {currentLocation3HourlyWeather ? threeHourlyList : null}
    </ul>
  );
}

export default LocationWeather3HourlyList;
