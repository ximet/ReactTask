import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from './UserContext';

function ContextProvider({ children }) {
  const [token, setToken] = useState('');

  useEffect(async () => {
    const cancelTokenSource = axios.CancelToken.source();

    try {
      const res = await axios
        .get('http://localhost:3000/auth', { cancelToken: cancelTokenSource.source })
        .then(res => {
          setToken(res.data.access_token);
        })
        .catch((error) => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);

    }

    return () => cancelTokenSource.cancel();
  }, []);

  return <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>;
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.element
};
