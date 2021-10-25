import React from 'react';
import PropTypes from 'prop-types';

import { favCitiesSliderOptions } from '../../../constants/slider';
import Slider from '../../../components/Slider/Slider';
import CityCard from './CityCard/CityCard';

const info = {
  minsk: {
    name: 'Minsk'
  },
  lipel: {
    name: 'Lipel'
  },
  gomel: {
    name: 'Gomel'
  }
};

function FavoriteCities({ favoriteCities, currentCity }) {
  const slides = [
    {
      id: 1,
      slide: <CityCard info={info.minsk} />
    },
    {
      id: 2,
      slide: <CityCard info={info.lipel} />
    },
    {
      id: 3,
      slide: <CityCard info={info.gomel} />
    },
    {
      id: 4,
      slide: <CityCard info={info.minsk} />
    },
    {
      id: 5,
      slide: <CityCard info={info.lipel} />
    },
    {
      id: 6,
      slide: <CityCard info={info.gomel} />
    },
    {
      id: 7,
      slide: <CityCard info={info.minsk} />
    }
  ];

  return (
    <>
      <Slider slides={slides} {...favCitiesSliderOptions} />
    </>
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
