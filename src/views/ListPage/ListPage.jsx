import React, { useEffect, useState } from 'react';
import { getCurrentWeatherById, getLocationInfoByName } from '../../api';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { url } from '../../constants';
import commonClasses from '../common.scss';

const locationNames = [
  // 'London',
  'Tokyo'
  // 'Paris',
  // 'Rome',
  // // 'Washington D.C.',
  // 'Berlin',
  // 'New York'
];

const ListPage = () => {
  const [weatherCards, setWeatherCards] = useState([]);

  useEffect(() => {
    locationNames.forEach(async name => {
      const location = await getLocationInfoByName(url, name);
      const weather = await getCurrentWeatherById(url, location.id);

      const element = (
        <div key={location.id}>
          <LocationHeader name={location.name} country={location.country} />
          <WeatherCard weather={weather} />
        </div>
      );

      setWeatherCards(prev => [...prev, element]);
    });
  }, []);

  return (
    <main className={commonClasses.page}>
      {weatherCards}
      <LocationSelect locationNames={locationNames} />
    </main>
  );
};

export default ListPage;
