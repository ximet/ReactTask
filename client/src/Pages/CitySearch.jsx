import React, { useState, useEffect } from 'react';
import MultiWeather from '../Components/MultiCard/MultiCard';
import * as Style from './CitySearch.styles';
import { weatherAPI } from '../API/api';
import endpoints from '../Utils/endpoints';
import { minCharacters } from '../Utils/minChars';
import { useDispatch, useSelector } from 'react-redux';
import { CITY_SAVE, CITY_REMOVE } from '../store/actionType';

const CitySearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [weatherData, setWeatherData] = useState([]);

  const savedCitiesData = useSelector(state => state.savedCitiesReducer.savedCities);

  const dispatch = useDispatch();

  useEffect(() => {
    let timerID;

    if (inputValue.length > minCharacters) {
      timerID = setTimeout(async () => {
        try {
          const res = await weatherAPI.get(endpoints.GET_CITY(inputValue));
          setSearchResults(res.data.locations);
        } catch (error) {
          alert(error);
        }
      }, 900);
    }
    return () => {
      clearTimeout(timerID);
    };
  }, [inputValue]);

  const cityValueHandler = value => {
    setInputValue(value);
  };

  const getCurrentCity = async city => {
    try {
      const { data } = await weatherAPI.get(endpoints.GET_FORECAST_BY_ID(city.id));

      setWeatherData(data.current);
      setSelectedCity(city);
      setInputValue('');
      setSearchResults([]);
    } catch (error) {
      alert(error);
    }
  };

  const saveCityToStore = () => {
    dispatch({ type: CITY_SAVE, payload: { selectedCity, weatherData } });
  };

  const getSavedCity = () => {
    getCurrentCity(savedCitiesData.selectedCity.id);
  };

  const deleteSavedCity = id => {
    dispatch({ type: CITY_REMOVE, payload: id });
    setSelectedCity({});
    setWeatherData([]);
  };

  return (
    <div>
      <Style.Container>
        <h1>Search by City</h1>
        <h2>Selected City: {selectedCity.name}</h2>
        <Style.CityContainer></Style.CityContainer>
        <Style.SaveButton onClick={saveCityToStore}>Save City</Style.SaveButton>
        <Style.Search>
          <Style.SearchInner>
            <Style.Input
              type="text"
              value={inputValue}
              onChange={e => cityValueHandler(e.target.value)}
            />
          </Style.SearchInner>
          <Style.Dropdown>
            {inputValue.length > minCharacters ? (
              <Style.DropdownRow result={searchResults}>
                {searchResults.map(result => (
                  <div key={result.id}>
                    <span
                      onClick={() => getCurrentCity(result)}
                    >{`${result.name}, ${result.country}`}</span>
                  </div>
                ))}
              </Style.DropdownRow>
            ) : null}
          </Style.Dropdown>
        </Style.Search>
      </Style.Container>

      <MultiWeather />
    </div>
  );
};

export default CitySearch;
