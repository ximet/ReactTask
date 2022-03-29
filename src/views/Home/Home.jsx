import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { weatherApi } from '../../services/WeatherApi';
import CurrentLocationForecast from '../../components/CurrentLocationForecast/CurrentLocationForecast';
import { setCurrentLocation } from '../../redux/actions/locationActions';
import { locationSelector } from '../../redux/selectors/locationSelector';
import classes from './Home.module.css';

function Home({ token }) {
  const dispatch = useDispatch();
  const { location } = useSelector(locationSelector);
  const params = useParams();

  const [locationInfo, setLocationInfo] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    if (params.id) {
      weatherApi
        .getLocationInfoById(params.id, token)
        .then(location => dispatch(setCurrentLocation(location)));
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        dispatch(setCurrentLocation({ lat, lon }));
      });
    }
  }, [params]);

  useEffect(() => {
    if (token && location) {
      weatherApi.getLocationInfo(location, token).then(data => setLocationInfo(data));
      weatherApi.getCurrentWeather(location, token).then(data => setCurrentWeather(data));
      weatherApi.getDailyForecast(location, token).then(data => setDailyForecast(data));
    }
  }, [location, token]);

  const currentDate = moment(currentWeather.time).format('dddd, Do MMMM');

  return (
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
