import React, { useState, useEffect } from 'react';
import { publicApiInstance } from '../../utils/api';
import { WeatherCard, SearchInput, SearchBar, Tooltip } from '../../components';
import endpoints from '../../config/enpoints';
import { numberThree, numberZero, numberOne } from '../../config/constants';
import * as S from './CityWeather.styles';

const CityWeather = () => {
  const [cityName, setCityName] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [results, setResults] = useState([]);
  const [chooseCityForecast, setChooseCityForecast] = useState([]);

  useEffect(() => {
    if (cityName.length > numberThree) {
      loadCities();
    }
  }, [cityName, loadCities]);

  const cityValueHandler = value => {
    setCityName(value);
  };

  const loadCities = async () => {
    try {
      const res = await publicApiInstance.get(endpoints.GET_CITIES(cityName));
      setResults(res.data.locations);
    } catch (error) {
      alert(error);
    }
  };

  const getCurrentCity = async city => {
    try {
      const res = await publicApiInstance.get(endpoints.GET_CITY_BY_ID(city.id));
      setChooseCityForecast(res.data.forecast);
      setCityName('');
      setResults([]);
      setSelectedCity(city.name);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <S.Title>Find forecast for your favorite city!</S.Title>
      <Tooltip
        text="Enter at least 4 letters!"
        tooltip={cityName.length >= numberOne && cityName.length <= numberThree}
      >
        <SearchInput
          placeholder="Enter city name"
          value={cityName}
          onChange={e => cityValueHandler(e.target.value)}
        />
      </Tooltip>
      {cityName.length > numberThree && results.length === numberZero && (
        <S.ErrorWrappper>No results found...</S.ErrorWrappper>
      )}
      {cityName.length > numberThree ? (
        <SearchBar results={results} onClick={city => getCurrentCity(city)} />
      ) : null}
      {chooseCityForecast && (
        <section>
          <S.PlaceDescriotion>{selectedCity}</S.PlaceDescriotion>
          <WeatherCard data={chooseCityForecast} />
        </section>
      )}
    </div>
  );
};

export default CityWeather;
