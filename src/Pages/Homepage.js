import Section from '../Components/Section/Section';
import City from '../Components/City/City';

import List from '../Pages/List';

import { useState, useEffect } from 'react';

import { useGeolocated } from 'react-geolocated';
import getCurrentWeather from '../Api/getCurrentWeather';
import getCity from '../Api/getCity';

const Homepage = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 1000
  });

  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);

  // getting City name by coords
  useEffect(() => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      getCity({ latitude: coords.latitude, longitude: coords.longitude })
        .then(data => {
          setCurrentCity(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [coords]);

  // getting City weather
  useEffect(() => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      getCurrentWeather(currentCity)
        .then(data => {
          setCurrentWeather(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [currentCity]);

  return (
    <>
      <Section>
        <City weather={currentWeather} />
      </Section>
    </>
  );
};

export default Homepage;
