import React from 'react';
import PropTypes from 'prop-types';

import { favCitiesSliderOptions } from '../../../constants/slider';
import styles from './FavoriteCities.module.scss';
import Slider from '../../../components/Slider/Slider';

function FavoriteCities({ cityCards }) {
  return (
    <div>
      <h2 className={styles.favCitiesTitle}>Favorite cities</h2>
      <Slider slideComponents={cityCards} {...favCitiesSliderOptions} />
    </div>
  );
}

FavoriteCities.defaultProps = {
  favoriteCities: []
};

FavoriteCities.propTypes = {
  cityCards: PropTypes.arrayOf(PropTypes.element.isRequired)
};

export default FavoriteCities;
