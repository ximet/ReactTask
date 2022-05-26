import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { publicApiInstance } from '../../utils/api';
import { WeatherCard, SearchInput, SearchBar, Tooltip, Button } from '../../components';
import endpoints from '../../config/endpoints';
import { minSearchCharacters } from '../../config/constants';
import { SAVE_SEARCH, DELETE_SEARCH } from '../../store/actionTypes';
import { translations } from '../../utils/translations';
import { useDebounce } from '../../hooks';
import * as S from './CityWeather.styles';

const CityWeather = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCity, setSelectedCity] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [chooseCityForecast, setChooseCityForecast] = useState([]);

  const dispatch = useDispatch();
  const favoriteCitiesData = useSelector(state => state.favoriteCities);
  const debounce = useDebounce(800);

  useEffect(() => {
    if (inputValue.length > minSearchCharacters) {
      debounce(() => {
        loadCities();
      });
    }
  }, [inputValue, loadCities, debounce]);

  const cityValueHandler = value => {
    setInputValue(value);
  };

  const loadCities = async () => {
    try {
      const { data } = await publicApiInstance.get(endpoints.GET_CITIES(inputValue));
      setSearchResults(data.locations);
    } catch (error) {
      alert(error);
    }
  };

  const getCurrentCity = async city => {
    try {
      const { data } = await publicApiInstance.get(endpoints.GET_CITY_BY_ID(city.id));
      setChooseCityForecast(data.forecast);
      setSelectedCity(city);
      setInputValue('');
      setSearchResults([]);
    } catch (error) {
      alert(error);
    }
  };

  const saveFavoriteCity = () => {
    dispatch({ type: SAVE_SEARCH, value: selectedCity });
  };

  const deleteFavoriteCity = id => {
    dispatch({ type: DELETE_SEARCH, id });
    setSelectedCity({});
    setChooseCityForecast([]);
  };

  const findFavoriteCity = city => {
    getCurrentCity(city);
  };

  const isCityExist = cityTitle => {
    return favoriteCitiesData.some(({ name }) => name === cityTitle);
  };

  return (
    <div>
      <S.Title>{translations.msg_page_city_weather_title}</S.Title>
      <S.Wrapper>
        {favoriteCitiesData.map(({ id, name }) => (
          <S.CityContainer key={id}>
            <span onClick={() => findFavoriteCity({ id, name })}>{name}</span>
            <S.DeleteWrapper onClick={() => deleteFavoriteCity(id)}>X</S.DeleteWrapper>
          </S.CityContainer>
        ))}
      </S.Wrapper>
      <Tooltip
        text={`${translations.msg_page_tooltip_title}
        ${minSearchCharacters}${translations.msg_page_tooltip_letters}`}
        tooltip={inputValue.length > 0 && inputValue.length <= minSearchCharacters}
      >
        <S.InputContainer>
          <SearchInput
            placeholder={translations.msg_search_input_title}
            value={inputValue}
            onChange={e => cityValueHandler(e.target.value)}
          />
          {isCityExist(selectedCity.name) ||
            (selectedCity.name && (
              <Button color="destructive" handleClick={saveFavoriteCity}>
                {`${translations.msg_button_save_city}${selectedCity.name}`}
              </Button>
            ))}
        </S.InputContainer>
      </Tooltip>
      {inputValue.length > minSearchCharacters && searchResults.length === 0 && (
        <S.ErrorWrapper>{translations.msg_page_city_weather_no_result}</S.ErrorWrapper>
      )}
      {inputValue.length > minSearchCharacters ? (
        <SearchBar results={searchResults} onClick={city => getCurrentCity(city)} />
      ) : null}
      {chooseCityForecast && (
        <section>
          <S.PlaceDescription>{selectedCity.name}</S.PlaceDescription>
          {chooseCityForecast.length > 0 && (
            <S.LinkWrapper>
              <S.LinkElement to={`weather/${selectedCity.name}/${selectedCity.id}`}>
                {translations.msg_page_city_weather_hourly}
              </S.LinkElement>
            </S.LinkWrapper>
          )}
          <WeatherCard data={chooseCityForecast} />
        </section>
      )}
    </div>
  );
};

export default CityWeather;
