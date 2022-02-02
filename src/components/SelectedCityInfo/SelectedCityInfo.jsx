import React from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/d000.png';
import CurrentWeatherItem from '../CurrentWeatherItem/CurrentWeatherItem';

import './SelectedCityInfo.scss';

function SelectedCityInfo({ locationInfo, currentWeather }) {
  return (
    <div className="city">
      <div className="city__title">{`${locationInfo.name}, ${locationInfo.country}`}</div>
      <div className="city__date">{currentWeather.time}</div>

      <div className="city__current">
        <div className="city__current-weather">
          <img className="city__current-img" src={img} alt="weather" />
          <div className="city__current-temperature">
            <div className="city__current-temperature-item">{currentWeather.temperature}</div>
            <div className="city__current-temperature-description">{currentWeather.symbolPhrase}</div>
          </div>
        </div>
        <div className="city__current-info">
          <CurrentWeatherItem name="Wind speed" data={currentWeather.windSpeed} />
          <CurrentWeatherItem name="Cloudiness" data={currentWeather.cloudiness} />
          <CurrentWeatherItem name="Pressure" data={currentWeather.pressure} />
          <CurrentWeatherItem name="Visibility" data={currentWeather.visibility} />
          <CurrentWeatherItem name="Humidity" data={currentWeather.relHumidity} />
          <CurrentWeatherItem name="Wind gust" data={currentWeather.windGust} />
        </div>
      </div>
    </div>
  );
}

SelectedCityInfo.propTypes = {
  locationInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  currentWeather: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelectedCityInfo;
