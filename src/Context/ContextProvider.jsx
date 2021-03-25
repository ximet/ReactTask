import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from './UserContext';

function ContextProvider({ children }) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    axios.get('http://localhost:3000/auth', { cancelToken: cancelTokenSource.source }).then(res => {
      setToken(res.data.access_token);
    });

    return () => cancelTokenSource.cancel();
  }, []);

  return <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>;
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.element
};
