import React from 'react';
import { WEATHER_ICON_ADDRESS } from '../../../constants';
function CityResult({ cityData }) {

  const CityInfromation = () => {
    if (!cityData) return 'no data for this city...';

    return (
      <div>
        <p>feelsLikeTemp: {cityData.feelsLikeTemp}</p>
        <p>relHumidity: {cityData.relHumidity}</p>
        <p>temperature: {cityData.temperature}</p>
        <p>time: {cityData.time}</p>
        {cityData.symbol && <img src={`${WEATHER_ICON_ADDRESS}${cityData.symbol}.png`}></img>}
      </div>
    );
  };

  return <CityInfromation />;
}

export default CityResult;
