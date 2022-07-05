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

  // getting City name by coords
  useEffect(() => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      getCity({ latitude: coords.latitude, longitude: coords.longitude })
        .then(data => {
          getCurrentWeather(data)
            .then(data => {
              setCurrentWeather(data);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [coords]);

  return (
    <>
      <Section>
        <City weather={currentWeather} />
      </Section>
    </>
  );
};

export default Homepage;
