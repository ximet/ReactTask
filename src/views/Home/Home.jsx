import React, { useEffect, useState } from 'react';
import moment from 'moment';
import classes from '../../App.module.css';
import weatherApi from '../../services/WeatherApi';
import CurrentLocationForecast from '../../components/CurrentLocationForecast/CurrentLocationForecast';

function Home({ token }) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [locationInfo, setLocationInfo] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCurrentPosition({ lat, lon });
    });
  }, []);

  useEffect(() => {
    if (currentPosition && token) {
      weatherApi.getLocationInfo(currentPosition, token).then(data => setLocationInfo(data));
      weatherApi.getCurrentWeather(currentPosition, token).then(data => setCurrentWeather(data));
      weatherApi.getDailyForecast(currentPosition, token).then(data => setDailyForecast(data));
    }
  }, [currentPosition, token]);

  const currentDate = moment(currentWeather.time).format('dddd, Do MMMM');

  return (
    <div className="mainSection">
      <div className={classes.image_container}>
        <CurrentLocationForecast
          locationInfo={locationInfo}
          currentWeather={currentWeather}
          currentDate={currentDate}
          dailyForecast={dailyForecast}
        />
      </div>
    </div>
  );
}

export default Home;
