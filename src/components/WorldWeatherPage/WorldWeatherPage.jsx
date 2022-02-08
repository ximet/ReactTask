import React, { useContext, useEffect } from 'react';

import weatherApi from '../../api/weatherApi';
import { WorldWeatherContext } from '../../core/contexts';
import { getCookie } from '../../utils/cookies';
import WorldWeatherItem from '../WorldWeatherItem/WorldWeatherItem';

import './WorldWeatherPage.scss';

const locationDisplayedCities = [
  '-0.118092,51.509865', /* London */
  '-118.243683,34.052235', /* Los Angeles */
  '37.618423,55.751244', /* Moscow */
  '13.404954,52.520008', /* Berlin */
  '121.469170,31.224361', /* Shanghai */
  /* '116.383331,39.916668', Beijing
  '72.877426,19.076090', Mumbai
  '28.979530,41.015137', Istanbul
  '139.839478,35.652832', Tokyo
  '-73.935242,40.730610', New York
  '2.349014,48.864716', Paris */
];

function WorldWeatherPage() {
  const [worldWeather, setWorldWeather] = useContext(WorldWeatherContext);

  useEffect(() => {
    if (!worldWeather.length) {
      const token = getCookie('token');
      locationDisplayedCities.forEach((cityLocation) => {
        weatherApi.getLocationInfo(cityLocation, token)
          .then((data) => {
            weatherApi.getCurrentWeather(cityLocation, token)
              .then((weather) => {
                const fullData = { ...data, ...weather };
                setWorldWeather((prev) => ([...prev, fullData]));
              });
          });
      });
    }
  }, []);

  return (
    <div className="world__weather">
      {worldWeather && worldWeather.map((cityData) => (
        <WorldWeatherItem cityData={cityData} key={cityData.id} />
      ))}
    </div>
  );
}

export default WorldWeatherPage;
