import React from 'react';
import PropTypes from 'prop-types';

function FavoriteCities({ favoriteCities, currentCity }) {
  console.log(favoriteCities, currentCity);
  return <div>Favorite Cities</div>;
}

FavoriteCities.propTypes = {
  favoriteCities: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  currentCity: PropTypes.shape({
    country: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default FavoriteCities;
