import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { API_KEY, BASE_URL, NOT_FOUND } from '../common/constants';
import { kelvinToCelsius } from '../common/helpers';

const CurrentWeather = ({ currentSearch }) => {
  const [currentTemp, setCurrentTemp] = useState('');
  const [isCityFound, setIsCityFound] = useState(true);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    axios
      .get(`${BASE_URL}weather?q=${currentSearch}&APPID=${API_KEY}`, {
        cancelToken: cancelTokenSource.token
      })
      .then(({ data }) => {
        const {
          main: { temp }
        } = data;

        const tempNow = kelvinToCelsius(temp);
        setCurrentTemp(tempNow);
        setIsCityFound(true);
      })
      .catch(({ response: { status } }) => status === NOT_FOUND && setIsCityFound(false));

    return () => cancelTokenSource.cancel();
  }, [currentSearch]);

  return isCityFound ? (
    <p>{`The current weather in ${currentSearch} is ${currentTemp} C.`}</p>
  ) : (
    <p>{`Ooops, looks like we couldn't find ${currentSearch}`}</p>
  );
};

CurrentWeather.propTypes = {
  currentSearch: PropTypes.string.isRequired
};

export default CurrentWeather;
