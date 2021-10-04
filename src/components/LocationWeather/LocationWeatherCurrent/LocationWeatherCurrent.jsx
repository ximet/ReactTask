import './LocationWeatherCurrent.css';

function LocationWeatherCurrent({ city, country }) {
  return (
    <div className="location-weather__current">
      <h2 className="location-weather__current-title">Weather in<br />{city}, {country}</h2>
    </div>
  );
}

export default LocationWeatherCurrent;
