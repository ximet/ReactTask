import React from 'react';
import PropTypes from 'prop-types';

import { favCitiesSliderOptions } from '../../../constants/slider';
import styles from './FavoriteCities.module.scss';
import Slider from '../../../components/Slider/Slider';
import CityCard from './CityCard/CityCard';

function FavoriteCities({ favoriteCities, currentCity }) {
  const cityCards = favoriteCities.map(city => ({
    id: city.id,
    slide: <CityCard info={city} />
  }));

  return (
    <div>
      <h2 className={styles.favCitiesTitle}>Favorite cities</h2>
      <Slider slides={cityCards} {...favCitiesSliderOptions} />
    </div>
  );
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
