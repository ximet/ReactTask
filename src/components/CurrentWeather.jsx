import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { API_KEY, BASE_URL, NOT_FOUND } from '../common/constants';
import { kelvinToCelsius } from '../common/helpers';

const CurrentWeather = ({ currentSearch }) => {
  const [currentTemp, setCurrentTemp] = useState('');
  const [isCityFound, setIsCityFound] = useState(true);

  useEffect(() => {
    axios.post('/authorize/token?user=virzhiniapetkova&password=urdFn082zfhL')
      // eslint-disable-next-line no-console
      .then(({ data }) => console.log(data));
  }, [currentSearch]);

  // useEffect(() => {
  //   axios.get('https://pfa.foreca.com/api/v1/location/search/Barcelona?lang=es', {
  //     headers: {
  // eslint-disable-next-line max-len
  //       Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTYxNjE1ODU2OCwiZXhwIjoxNjE2MTYyMTY4LCJuYmYiOjE2MTYxNTg1NjgsImp0aSI6ImRjY2Q4ZjI0NDkwZjRiYzYiLCJzdWIiOiJ2aXJ6aGluaWFwZXRrb3ZhIiwiZm10IjoiWERjT2hqQzQwK0FMamxZVHRqYk9pQT09In0.ywUYJ4-HhT0l3BY1qXABL4c9G7xxRYSj7cUolNMEndw',
  //     },
  //   })
  //     .then(console.log);
  // }, [currentSearch]);
  
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    axios.get(`${BASE_URL}weather?q=${currentSearch}&APPID=${API_KEY}`, {
      cancelToken: cancelTokenSource.token,
    })
      .then(({ data }) => {
        const {
          main: {
            temp,
          },
        } = data;
          
        const tempNow = kelvinToCelsius(temp);
        setCurrentTemp(tempNow);
        setIsCityFound(true);
      })
      .catch(({ response: { status } }) => status === NOT_FOUND && setIsCityFound(false));

    return () => cancelTokenSource.cancel();
  }, [currentSearch]);

  return isCityFound
    ? <p>{`The current weather in ${currentSearch} is ${currentTemp} C.`}</p>
    : <p>{`Ooops, looks like we couldn't find ${currentSearch}`}</p>;
};

CurrentWeather.propTypes = {
  currentSearch: PropTypes.string.isRequired,
};

export default CurrentWeather;
