import React from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/d000.png';
import CurrentWeatherItem from '../CurrentWeatherItem/CurrentWeatherItem';

import './SelectedCityInfo.scss';
import TodaysWeatherItem from '../TodaysWeatherItem/TodaysWeatherItem';

function SelectedCityInfo({ locationInfo, currentWeather, todaysWeather }) {
  const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const date = new Intl.DateTimeFormat('en-US', dateOptions).format(currentWeather.date);

  return (
    <div className="city">
      <div className="city__title">{`${locationInfo.name}, ${locationInfo.country}`}</div>
      <div className="city__date">{date}</div>

      <div className="city__current">
        <div className="city__current-weather">
          <img className="city__current-img" src={img} alt="weather" />
          <div className="city__current-temperature">
            <div className="city__current-temperature-item">{currentWeather.temperature}</div>
            <div className="city__current-temperature-description">{currentWeather.symbolPhrase}</div>
          </div>
        </div>
        <div className="city__current-info">
          <CurrentWeatherItem name="Wind speed" data={`${currentWeather.windSpeed} mph`} />
          <CurrentWeatherItem name="Cloudiness" data={`${currentWeather.cloudiness}%`} />
          <CurrentWeatherItem name="Pressure" data={`${Math.round(currentWeather.pressure)} hPa`} />
          <CurrentWeatherItem name="Visibility" data={`${currentWeather.visibility} m`} />
          <CurrentWeatherItem name="Humidity" data={`${currentWeather.relHumidity}%`} />
          <CurrentWeatherItem name="Wind gust" data={`${currentWeather.windGust} m/s`} />
        </div>
      </div>

      <div className="city__header">Weather for the next 24 hours:</div>
      <div className="city__todays">
        {todaysWeather.map((item) => <TodaysWeatherItem data={item} key={item.time} />)}
      </div>
    </div>
  );
}

SelectedCityInfo.propTypes = {
  locationInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  currentWeather: PropTypes.objectOf(PropTypes.any).isRequired,
  todaysWeather: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SelectedCityInfo;
