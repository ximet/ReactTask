import React, { useState, useEffect } from 'react';
import * as Style from './Searchbar.styles';
import { weatherAPI } from '../API/api';
import endpoints from '../Utils/endpoints';
import { minCharacters } from '../Utils/minChars';
import MultiWeather from './MultiCard';

export default function SearchBar() {
  const [cityName, setCityName] = useState('');
  const [results, setResults] = useState([]);
  const [chooseCityForecast, setChooseCityForecast] = useState([]);

  useEffect(() => {
    if (cityName.length > minCharacters) {
      loadCities();
    }
  }, [cityName, loadCities]);

  const cityValueHandler = value => {
    setCityName(value);
  };

  const loadCities = async () => {
    try {
      const res = await weatherAPI.get(endpoints.GET_CITY(cityName));
      setResults(res.data.locations);
    } catch (error) {
      alert(error);
    }
  };

  const getCurrentCity = async city => {
    try {
      const res = await weatherAPI.get(endpoints.GET_DAILY_BY_ID(city.id));
      console.log(res);
      setChooseCityForecast(res.data.forecast);
      setCityName('');
      setResults([]);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Style.Container>
      <h1>Search by City</h1>

      <Style.Search>
        <Style.SearchInner>
          <Style.Input
            type="text"
            value={cityName}
            onChange={e => cityValueHandler(e.target.value)}
          />
        </Style.SearchInner>
        <Style.Dropdown>
          {cityName.length > minCharacters ? (
            <Style.DropdownRow results={results}>
              {results.map(result => (
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
      {chooseCityForecast && (
        <section>
          <MultiWeather data={chooseCityForecast} />
        </section>
      )}
    </Style.Container>
  );
}
