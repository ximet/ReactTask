import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ logo }) => (
  <img src={logo.source} alt={logo.alt} />
);

Header.propTypes = {
  logo: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default Header;
