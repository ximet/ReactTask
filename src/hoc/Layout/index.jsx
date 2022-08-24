import React from 'react';
import PropTypes from 'prop-types';

// Styles
import GlobalStyle from './styles';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
