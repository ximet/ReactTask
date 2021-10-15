import React from 'react';

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

function FavoriteCities() {
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

export default FavoriteCities;
