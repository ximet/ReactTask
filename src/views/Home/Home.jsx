import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { weatherApi } from '../../services/WeatherApi';
import CurrentLocationForecast from '../../components/CurrentLocationForecast/CurrentLocationForecast';
import { BG_IMAGE } from '../../helpers/toggleTheme';
import Image from '../../atomic-components/Image/Image';

function Home({ token, city, theme }) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [locationInfo, setLocationInfo] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
  const bgImage = BG_IMAGE[theme];

  if (city) {
    weatherApi.getLocationInfo(currentPosition, token).then(data => setLocationInfo(data));
  }

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
    <div>
      <Image image={bgImage} />
      <CurrentLocationForecast
        locationInfo={locationInfo}
        currentWeather={currentWeather}
        currentDate={currentDate}
        dailyForecast={dailyForecast}
      />
    </div>
  );
}

export default Home;
