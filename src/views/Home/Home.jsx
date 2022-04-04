import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { weatherApi } from '../../services/WeatherApi';
import CurrentLocationForecast from '../../components/CurrentLocationForecast/CurrentLocationForecast';
import { setCurrentLocation } from '../../redux/actions/locationActions';
import { setToken } from '../../redux/actions/tokenActions';
import { locationSelector } from '../../redux/selectors/locationSelector';
import classes from './Home.module.css';
import { TokenContext } from '../../providers/tokenContext';

function Home() {
  const { location } = useSelector(locationSelector);
  const { token } = useContext(TokenContext);
  const params = useParams();
  const dispatch = useDispatch();

  const [locationInfo, setLocationInfo] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    if (params.id) {
      weatherApi.getToken().then(accessToken => {
        weatherApi.getLocationInfoById(params.id, accessToken).then(location => dispatch(setCurrentLocation(location)))
      });
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
      weatherApi.getLocationInfo(location, token.token).then(data => setLocationInfo(data));
      weatherApi.getCurrentWeather(location, token.token).then(data => setCurrentWeather(data));
      weatherApi.getDailyForecast(location, token.token).then(data => setDailyForecast(data));
    }
  }, [location, token]);

  const currentDate = moment(currentWeather.time).format('dddd, Do MMMM');

  return (
    <div className={classes.home_view_wrapper}>
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
