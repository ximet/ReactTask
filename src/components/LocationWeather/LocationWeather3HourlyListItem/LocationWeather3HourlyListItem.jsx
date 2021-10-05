import { API_SYMBOL_URL_POSTFIX, API_SYMBOL_URL_PREFIX, API_WIND_IMG_URL_POSTFIX, API_WIND_IMG_URL_PREFIX, WIND_DIRECTIONS_TO_IMG } from '../../../constants/constants';
import { formatTemperature } from '../../../utils/utils';
import './LocationWeather3HourlyListItem.css';

function LocationWeather3HourlyListItem({ threeHourlyData }) {  
  const time = threeHourlyData.time.split('T')[1].split(/[+-]/)[0];  

  return (
    <li
      className="location-weather__3hourly-list-item"      
    >      
      <div className="location-weather__3hourly-list-item-time">{time}</div>
      <img
        src={`${API_SYMBOL_URL_PREFIX}${threeHourlyData.symbol}${API_SYMBOL_URL_POSTFIX}`}
        alt={threeHourlyData.time}
        className="location-weather__3hourly-list-item-symbol-img"
      />
      <div className="location-weather__3hourly-list-item-temperature">        
        {formatTemperature(threeHourlyData.temperature) + '°'}        
      </div>
      <img
          src={`
              ${API_WIND_IMG_URL_PREFIX}${
            WIND_DIRECTIONS_TO_IMG[threeHourlyData.windDirString]
          }${API_WIND_IMG_URL_POSTFIX}
            `}
          alt={`${threeHourlyData.windDirString} ${threeHourlyData.windSpeed} m/s`}
          className="location-weather__3hourly-list-item-wing-img"
        />
      <div className="location-weather__3hourly-list-item-wind-speed">        
        {threeHourlyData.windSpeed} m/s        
      </div>
    </li>
  );
}

export default LocationWeather3HourlyListItem;
