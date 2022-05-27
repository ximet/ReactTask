import React, { useState, useEffect } from 'react';
import * as Style from './Searchbar.styles';
import { weatherAPI } from '../../API/api';
import endpoints from '../../Utils/endpoints';
import { minCharacters } from '../../Utils/minChars';
import { useDispatch } from 'react-redux';
import { CITY_SELECT } from '../../store/actionType';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let timerID;

    if (inputValue.length > minCharacters) {
      timerID = setTimeout(async () => {
        try {
          const res = await weatherAPI.get(endpoints.GET_CITY(inputValue));
          setResults(res.data.locations);
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
      const res = await weatherAPI.get(endpoints.GET_DAILY_BY_ID(city.id));
      setInputValue('');
      setResults([]);
      dispatch({ type: CITY_SELECT, value: res.data.forecast });
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
            value={inputValue}
            onChange={e => cityValueHandler(e.target.value)}
          />
        </Style.SearchInner>
        <Style.Dropdown>
          {inputValue.length > minCharacters ? (
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
    </Style.Container>
  );
}
