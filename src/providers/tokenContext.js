import React, { useEffect, useReducer } from 'react';
import { weatherApi } from '../services/WeatherApi';
import { tokenReducer } from '../redux/reducers/tokenReducer';
import { setToken } from '../redux/actions/tokenActions';

export const TokenContext = React.createContext();

export const TokenProvider = ({ children }) => {
  const [token, dispatch] = useReducer(tokenReducer);

  useEffect(() => {
    weatherApi.getToken().then(accessToken => dispatch(setToken(accessToken)));
  }, []);

  return <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>;
};
