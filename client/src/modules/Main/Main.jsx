import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import React from 'react';

export function Main(props) {
  return (
    <>
      {props.pages.map(page => {
        return (
          <Route key={page.name} component={page.component} path={page.path} exact={page.exact} />
        );
      })}
    </>
  );
}

Main.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      component: PropTypes.elementType,
      path: PropTypes.string,
      exact: PropTypes.bool
    })
  )
};
