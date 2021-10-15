import React from 'react';

import { favCitiesSliderOptions } from '../../../constants/slider';
import Slider from '../../../components/Slider/Slider';
import CityCard from './CityCard/CityCard';

const slideData = [1, 2, 3, 4, 5];

function FavoriteCities() {
  return (
    <>
      {/* <Slider slideData={slideData} {...favCitiesSliderOptions} /> */}
      <CityCard />
    </>
  );
}

export default FavoriteCities;
