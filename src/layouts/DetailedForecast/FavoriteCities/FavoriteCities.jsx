import React from 'react';

import { favCitiesSliderOptions } from '../../../constants/slider';
import Slider from '../../../components/Slider/Slider';

function FavoriteCities() {
  return <Slider {...favCitiesSliderOptions} />;
}

export default FavoriteCities;
