import React from 'react';

import WorldWeatherItem from '../WorldWeatherItem/WorldWeatherItem';

import './WorldWeatherPage.scss';

export const worldCitiesInfo = [
  { location: '-0.118092,51.509865', name: 'London', country: 'United Kingdom' },
  { location: '-118.243683,34.052235', name: 'Los Angeles', country: 'United States' },
  { location: '37.618423,55.751244', name: 'Moscow', country: 'Russia' },
  { location: '13.404954,52.520008', name: 'Berlin', country: 'Germany' },
  { location: '121.469170,31.224361', name: 'Shanghai', country: 'China' },
  { location: '116.383331,39.916668', name: 'Beijing', country: 'China' },
  { location: '72.877426,19.076090', name: 'Mumbai', country: 'India' },
  { location: '28.979530,41.015137', name: 'Istanbul', country: 'Turkey' },
  { location: '139.839478,35.652832', name: 'Tokyo', country: 'Japan' },
  { location: '-73.935242,40.730610', name: 'New York', country: 'United States' },
  { location: '2.349014,48.864716', name: 'Paris', country: 'France' },
];

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
