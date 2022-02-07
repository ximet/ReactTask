import React, { useEffect, useState } from 'react';
import moment from 'moment';
import classes from '../../App.module.css';
import weatherApi from '../../services/WeatherApi';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';

function Home({ token }) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [locationInfo, setLocationInfo] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});

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
    }
  }, [currentPosition, token]);

  const currentDate = moment(currentWeather.time).format('dddd, Do MMMM');

  return (
    <div className="mainSection">
      <div className={classes.image_container}>
        <CurrentWeather
          locationInfo={locationInfo}
          currentWeather={currentWeather}
          currentDate={currentDate}
        />
      </div>
    </div>
  );
}

export default Home;
