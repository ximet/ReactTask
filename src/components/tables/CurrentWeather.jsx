import React from 'react';
import { Spinner } from '../';
import * as S from './CurrentWeather.styles';

const Currentweather = ({ data }) => {
  return (
    <div>
      <h1>Current Weather Now</h1>
      {data.length !== 0 ? (
        <S.TableContainer>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature °C</th>
              <th>Cloudiness %</th>
              <th>Wind speed m/s</th>
              <th>Pressure hPa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.time.slice(0, 10)}</td>
                <td>{item.temperature}</td>
                <td>{item.cloudiness}</td>
                <td>{item.windSpeed}</td>
                <td>{item.pressure}</td>
              </tr>
            ))}
          </tbody>
        </S.TableContainer>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Currentweather;
