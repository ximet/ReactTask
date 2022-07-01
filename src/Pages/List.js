import { useState, useEffect } from 'react';

import Section from '../Components/Section/Section';
import PopupPortal from '../Components/Popup/PopupPortal';

import CitiesForm from '../Components/CitiesForm/CitiesForm';
import City from '../Components/City/City';

import getCityCoords from '../Api/getCityCoords';
import getCurrentWeather from '../Api/getCurrentWeather';

const List = () => {
  const [city, setCity] = useState('');
  const [cityCoords, setCityCoords] = useState(null);
  const [cityWeather, setCityWeather] = useState(null);

  const [error, setError] = useState(false);

  const getCity = e => {
    setCity(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();

    if (city != null) {
      getCityCoords(city)
        .then(data => {
          if (data != undefined) {
            setCityCoords(data);
          } else {
            setError('Город не найден!');
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    return;
  };

  useEffect(() => {
    if (cityCoords != null) {
      getCurrentWeather(cityCoords)
        .then(data => {
          console.log(data);
          setCityWeather(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [cityCoords]);

  const closePopup = () => {
    setError(false);
  };
  return (
    <>
      {error && <PopupPortal close={closePopup} message={error} />}
      <Section>
        <h1>Найти город</h1>
        <CitiesForm submitForm={submitForm} getCity={getCity} city={city} />
        <City weather={cityWeather} />
        {/* <CitiesList citiesArray={citiesArray} /> */}
      </Section>
    </>
  );
};

export default List;
