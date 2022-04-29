import React, { useState, useEffect } from 'react';
import { publicApiInstance } from '../../utils/api';
import { WeatherCard, SearchInput, SearchBar, Tooltip } from '../../components';
import endpoints from '../../config/enpoints';
import * as S from './CityWeather.styles';

const CityWeather = () => {
  const [cityName, setCityName] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [results, setResults] = useState([]);
  const [chooseCityForecast, setChooseCityForecast] = useState([]);

  useEffect(() => {
    cityName.length > 3 && loadCities();
  }, [cityName]);

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
        tooltip={cityName.length >= 1 && cityName.length <= 3}
      >
        <SearchInput
          placeholder="Enter city name"
          value={cityName}
          onChange={e => cityValueHandler(e.target.value)}
        />
      </Tooltip>
      {cityName.length > 3 && results.length === 0 && (
        <S.ErrorWrappper>No results find...</S.ErrorWrappper>
      )}
      {cityName.length > 3 ? (
        <SearchBar results={results} onClick={city => getCurrentCity(city)} />
      ) : (
        ''
      )}
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
