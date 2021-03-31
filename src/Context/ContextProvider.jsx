import React from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import capitalsData from '../common/data';

function ContextProvider({ children }) {
  useEffect(async () => {
    const cancelTokenSource = axios.CancelToken.source();

    try {
      const res = await axios
        .get('http://localhost:3000/auth', { cancelToken: cancelTokenSource.source })
        .then(res => {
          setToken(res.data.access_token);
        })
        .catch(error => {
          console.log(error);
        });
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
