import React from 'react';
import { Spinner } from '../';
import { getWeatherIcon } from '../../services/functions';
import { translations } from '../../utils/translations';
import * as S from './CurrentWeather.styles';

const CurrentWeather = ({ data }) => {
  const [weatherData] = data;

  return (
    <div>
      {data.length !== 0 ? (
        <S.Container>
          <S.ImageContainer>
            <img src={getWeatherIcon(weatherData.symbol)} alt={weatherData.symbolPhrase} />
          </S.ImageContainer>
          <S.WeatherInfoContainer>
            <S.Temperature>
              <span>{weatherData.temperature}&deg;</span>
            </S.Temperature>
            <div>
              <S.Conditions>{weatherData.symbolPhrase}</S.Conditions>
              <S.About>
                <p>
                  {translations.msg_wind}
                  {weatherData.windSpeed} m/s
                </p>
                <p>
                  {translations.msg_cloudiness}
                  {weatherData.cloudiness} %
                </p>
                <p>
                  {translations.msg_pressure}
                  {weatherData.pressure} hPa
                </p>
              </S.About>
            </div>
          </S.WeatherInfoContainer>
          <S.Date>{weatherData.time.slice(0, 10)}</S.Date>
        </S.Container>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CurrentWeather;
