import React from 'react';
import { WEATHER_ICON_ADDRESS } from '../../../constants';
function CityResult({ cityData }) {
  console.log('cityData: ', cityData);

  return (
    <div>
      <p>cloudiness: {cityData.cloudiness}</p>
      <p>dewPoint: {cityData.dewPoint}</p>
      <p>feelsLikeTemp: {cityData.feelsLikeTemp}</p>
      <p>precipProb: {cityData.precipProb}</p>
      <p>precipRate: {cityData.precipRate}</p>
      <p>pressure: {cityData.pressure}</p>
      <p>relHumidity: {cityData.relHumidity}</p>
      <p>symbol: {cityData.symbol}</p>
      <p>symbolPhrase: {cityData.symbolPhrase}</p>
      <p>temperature: {cityData.temperature}</p>
      <p>thunderProb: {cityData.thunderProb}</p>
      <p>time: {cityData.time}</p>
      <p>uvIndex: {cityData.uvIndex}</p>
      <p>visibility: {cityData.visibility}</p>
      <p>windDir: {cityData.windDir}</p>
      <p>windDirString: {cityData.windDirString}</p>
      <p>windGust: {cityData.windGust}</p>
      <p>windSpeed: {cityData.windSpeed}</p>
      {cityData.symbol && <img src={`${WEATHER_ICON_ADDRESS}${cityData.symbol}.png`}></img>}
    </div>
  );
}

export default CityResult;
