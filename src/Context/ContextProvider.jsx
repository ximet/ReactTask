import React from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import capitalsData from '../common/data';

function ContextProvider({ children }) {
  // capitals will come from request from Freca Api
  const capitals = capitalsData;

  return (
    <UserContext.Provider
      value={({ capitals })}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.element,
};
