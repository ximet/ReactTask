import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ logo }) => (
  <div>
    <img src={logo.source} alt={logo.alt} />
  </div>
);

Header.propTypes = {
  logo: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default Header;
