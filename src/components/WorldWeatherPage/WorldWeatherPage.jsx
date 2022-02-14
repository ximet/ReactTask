import React from 'react';

import WorldWeatherItem from '../WorldWeatherItem/WorldWeatherItem';

import worldCitiesInfo from '../../MOCK/mock_worldCitiesInfo';
import sortCitiesByCountryAndName from '../../utils/sortCities';

import './WorldWeatherPage.scss';

function WorldWeatherPage() {
  return (
    <div className="world__weather">
      { sortCitiesByCountryAndName(worldCitiesInfo).map((cityData) => (
        <WorldWeatherItem cityData={cityData} key={cityData.name} />
      ))}
    </div>
  );
}

export default WorldWeatherPage;
