import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ place, onClick, id }) => (
  <a
    className="dropdown__list__item"
    onClick={e => onClick({ e, place, id })}
    onKeyDown={onClick}
    tabIndex={0}
    role="button"
  >
    {place}
  </a>
);

Link.propTypes = {
  place: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Link;
