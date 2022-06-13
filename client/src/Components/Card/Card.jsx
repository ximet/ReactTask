import React from 'react';
import Spinner from '../Spinner/Spinner';
import * as Style from './Card.styles';

const Currentweather = ({ data }) => {
  const [weatherData] = data;
  console.log(weatherData);

  if (!weatherData) return <Spinner />;

  return (
    <div>
      <Style.Container>
        <Style.WeatherInfoContainer>
          <Style.Temperature>
            <span>{weatherData.temperature}&deg;</span>
          </Style.Temperature>
          <div>
            <Style.Conditions>{weatherData.symbolPhrase}</Style.Conditions>
            <Style.Details>
              <p>Wind: {weatherData.windSpeed} m/s</p>
              <p>Cloudiness: {weatherData.cloudiness} %</p>
              <p>Pressure: {weatherData.pressure} hPa</p>
            </Style.Details>
          </div>
        </Style.WeatherInfoContainer>
        <Style.Date>{weatherData.time.slice(0, 10)}</Style.Date>
      </Style.Container>
    </div>
  );
};

export default Currentweather;
