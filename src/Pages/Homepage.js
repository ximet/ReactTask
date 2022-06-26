import Section from '../Components/Section/Section';
import City from '../Components/City/City';

import { useState, useEffect } from 'react';

import getCurrentWeather from '../Api/getCurrentWeather';
import { useGeolocated } from 'react-geolocated';

const Homepage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 1000
  });

  useEffect(() => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      getCurrentWeather(coords)
        .then(data => {
          setCurrentWeather(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [coords]);
  // .get(`current/location=33,33`)
  // .get(`observation/latest/location=41.627496,41.616724`)

  // let cre = popla();

  return (
    <>
      {currentWeather && (
        <Section>
          <City currentWeather={currentWeather} />
        </Section>
      )}
    </>
  );
};

export default Homepage;
