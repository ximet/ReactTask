import React, { useState, useEffect } from 'react';
import { publicApiInstance } from '../../utils/api';
import { WeatherCard, SearchInput, SearchBar, Tooltip } from '../../components';
import endpoints from '../../config/endpoints';
import { minSearchCharacters } from '../../config/constants';
import { translations } from '../../utils/translations';
import * as S from './CityWeather.styles';

const CityWeather = () => {
  const [cityName, setCityName] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [results, setResults] = useState([]);
  const [chooseCityForecast, setChooseCityForecast] = useState([]);

  useEffect(() => {
    if (cityName.length > minSearchCharacters) {
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
      <S.Title>{translations.msg_page_city_weather_title}</S.Title>
      <Tooltip
        text={`${translations.msg_page_tooltip_title}
        ${minSearchCharacters}${translations.msg_page_tooltip_letters}`}
        tooltip={cityName.length > 0 && cityName.length <= minSearchCharacters}
      >
        <SearchInput
          placeholder={translations.msg_search_input_title}
          value={cityName}
          onChange={e => cityValueHandler(e.target.value)}
        />
      </Tooltip>
      {cityName.length > minSearchCharacters && results.length === 0 && (
        <S.ErrorWrapper>{translations.msg_page_city_weather_no_result}</S.ErrorWrapper>
      )}
      {cityName.length > minSearchCharacters ? (
        <SearchBar results={results} onClick={city => getCurrentCity(city)} />
      ) : null}
      {chooseCityForecast && (
        <section>
          <S.PlaceDescription>{selectedCity}</S.PlaceDescription>
          <WeatherCard data={chooseCityForecast} />
        </section>
      )}
    </div>
  );
};

export default CityWeather;
