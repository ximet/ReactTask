import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/material/styles';

const StyledMain = styled('main')(() => ({
  flex: '1 0 auto'
}));
export function Main(props) {
  return (
    <StyledMain>
      {props.pages.map(page => {
        return (
          <Route key={page.name} component={page.component} path={page.path} exact={page.exact} />
        );
      })}
    </StyledMain>
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
