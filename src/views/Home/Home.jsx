import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { weatherApi } from '../../services/WeatherApi';
import CurrentLocationForecast from '../../components/CurrentLocationForecast/CurrentLocationForecast';
import Loader from '../../atomic-components/Loader/Loader';
import { setCurrentLocation } from '../../redux/actions/locationActions';
import { locationSelector } from '../../redux/selectors/locationSelector';

function Home({ token }) {
  const dispatch = useDispatch();
  const { location } = useSelector(locationSelector);
  const [isLoading, setLoading] = useState(true);

  const [locationInfo, setLocationInfo] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      dispatch(setCurrentLocation({ lat, lon }));
    });
  }, []);

  useEffect(() => {
    if (token && location) {
      weatherApi.getLocationInfo(location, token).then(data => setLocationInfo(data));
      weatherApi.getCurrentWeather(location, token).then(data => {
        setCurrentWeather(data);
        setLoading(false);
      });
      weatherApi.getDailyForecast(location, token).then(data => setDailyForecast(data));
    }
  }, [location, token]);

  const currentDate = moment(currentWeather.time).format('dddd, Do MMMM');

  return isLoading ? (
    <Loader />
  ) : (
    <div>
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
