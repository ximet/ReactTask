import React from 'react';

import WorldWeatherItem from '../WorldWeatherItem/WorldWeatherItem';

import './WorldWeatherPage.scss';

import worldCitiesInfo from '../../MOCK/mock_worldCitiesInfo';

function WorldWeatherPage() {
  return (
    <div className="world__weather">
      { worldCitiesInfo.map((cityData) => (
        <WorldWeatherItem cityData={cityData} key={cityData.name} />
      ))}
    </div>
  );
}

export default WorldWeatherPage;
