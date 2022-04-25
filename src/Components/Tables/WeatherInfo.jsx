import React from 'react';
import { Spinner } from '..';
import * as Style from './WeatherInfo.styles';

const WeatherInfo = ({ data }) => {
  return (
    <div>
      <h1>Current Weather</h1>
      {data.length !== 0 ? (
        <Style.Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp</th>
              <th>Cloudiness</th>
              <th>Wind speed m/s</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.time.slice(0, 10)}</td>
                <td>{item.temperature}</td>
                <td>{item.cloudiness}</td>
                <td>{item.windSpeed}</td>
                <td>{item.relHumidity}</td>
              </tr>
            ))}
          </tbody>
        </Style.Table>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default WeatherInfo;
