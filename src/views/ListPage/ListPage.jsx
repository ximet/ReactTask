import React, { useEffect, useState } from 'react';
import { getCurrentWeatherById, getLocationInfoByName } from '../../api';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { url } from '../../constants';
import commonClasses from '../common.scss';

const ListPage = ({ token }) => {
  const locationNames = [
    'London',
    'Tokyo',
    'Paris',
    'Rome',
    // 'Washington D.C.',
    'Berlin',
    'New York'
  ];

  const [weatherCards, setWeatherCards] = useState([]);
  // const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    locationNames.forEach(async name => {
      const location = await getLocationInfoByName(url, token, name);
      const weather = await getCurrentWeatherById(url, token, location.id);

      const element = (
        <div key={location.id}>
          <LocationHeader name={location.name} country={location.country} />
          <WeatherCard weather={weather} />
        </div>
      );

      setWeatherCards(prev => [...prev, element]);
    });
    // setLocations(locations);
    // get list of weather
    // const weatherList = locations.map(location => getCurrentWeatherById(url, token, location.id));
    // setWeatherList(weatherList);
  }, []);

  return <main className={commonClasses.page}>{weatherCards}</main>;
};

export default ListPage;
