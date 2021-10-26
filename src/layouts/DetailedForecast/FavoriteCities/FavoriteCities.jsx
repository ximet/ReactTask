import React from 'react';
import PropTypes from 'prop-types';

function FavoriteCities({ favoriteCities }) {
  return <div>Favorite Cities</div>;
}

FavoriteCities.defaultProps = {
  favoriteCities: []
};

FavoriteCities.propTypes = {
  favoriteCities: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};

export default FavoriteCities;
