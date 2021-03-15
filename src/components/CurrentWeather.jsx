import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { API_KEY, BASE_URL } from '../common/constants';
import { FtoC } from '../common/helpers';

const CurrentWeather = ({ currentSearch }) => {
  const [currentTemp, setCurrentTemp] = useState('');
  
  useEffect(() => {
    if (currentSearch) {
      axios.get(`${BASE_URL}?q=${currentSearch}&APPID=${API_KEY}`)
        .then((data) => {
          const {
            main: {
              temp,
            },
          } = data.data;
          
          const tempNow = FtoC(temp);
          setCurrentTemp(tempNow);
        });
    }
  }, [currentSearch]);

  return <p>{`The current weather in ${currentSearch} is ${currentTemp} C.`}</p>;
};
CurrentWeather.propTypes = {
  currentSearch: PropTypes.string,
};

export default CurrentWeather;
