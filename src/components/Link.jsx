import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ place, onClick }) => (
  <a
    className="dropdown__list__item"
    onClick={onClick}
    onKeyDown={onClick}
    tabIndex={0}
    role="button"
  >
    {place}
  </a>
);

Link.propTypes = {
  place: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
