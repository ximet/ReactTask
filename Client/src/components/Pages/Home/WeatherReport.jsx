import React from 'react';
import { WEATHER_ICON_ADDRESS } from '../../../constants';

function WeatherReport(props) {
  console.log('PROPS: ', props.data);
  return props.data ? (
    <div key={props.data.station}>
      <img src={`${WEATHER_ICON_ADDRESS}${props.data.symbol}.png`}></img>
      <div>Station: {props.data.station}</div>
      <div>Temperature: {props.data.temperature}</div>
      <div>Feels like: {props.data.feelsLikeTemp}</div>
      <div>Visibility: {props.data.visibility}</div>
      <div style={{ marginBottom: 20 }}>{props.data.windDir}</div>
    </div>
  ) : (
    <p>Loading</p>
  );
}

export default WeatherReport;
