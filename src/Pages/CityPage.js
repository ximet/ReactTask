import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import getCityCoords from '../Api/getCityCoords';
import getDetailWeather from '../Api/getDetailWeather';

import Section from '../Components/Section/Section';
import CityDetails from '../Components/CityDetails/CityDetails';

const CityPage = () => {
  let location = useLocation();
  const [city, setCity] = useState(null);
  const [cityDetails, setCityDetails] = useState(null);

  useEffect(() => {
    setCity(decodeURI(location.pathname.split('=')[1]));
    if (city) {
      getCityCoords(city)
        .then(data => {
          getDetailWeather({ latitude: data.latitude, longitude: data.longitude })
            .then(data => {
              setCityDetails(data);
            })
            .catch(() => {
              // dispatch(listPageActions.setError('Сity is not found!'));
            });
        })
        .catch(() => {
          // dispatch(listPageActions.setError('Сity is not found!'));
        });
    }
    console.log(cityDetails);
  }, [city]);

  return (
    <>
      <Section>{cityDetails && <CityDetails weather={cityDetails} />}</Section>
    </>
  );
};

export default CityPage;
