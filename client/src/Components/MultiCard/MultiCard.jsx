import * as Style from './MultiCard.styles';

import { getWeatherIcon } from '../../Utils/weatherIcon';

import { useSelector, useDispatch } from 'react-redux';
import { CITY_REMOVE } from '../../store/actionType';

const MultiWeather = () => {
  const citiesAndWeatherInfo = useSelector(state => state.savedCitiesReducer.savedCities);

  const dispatch = useDispatch();

  const deleteCity = selectedCity => {
    dispatch({ type: CITY_REMOVE, payload: selectedCity });
  };

  return (
    <Style.Container>
      {citiesAndWeatherInfo?.map(({ weatherData, selectedCity }) => (
        <Style.WeatherWrapper key={weatherData}>
          <Style.DeleteButton onClick={() => deleteCity(selectedCity)}>X</Style.DeleteButton>
          <section>
            <Style.weatherCard>
              <Style.currentTemp>
                <Style.currentTempText>{weatherData.temperature}&deg;</Style.currentTempText>
                <Style.LocationInfo>
                  {selectedCity.name}
                  <Style.currentConditionsText>
                    {weatherData.symbolPhrase}
                  </Style.currentConditionsText>
                </Style.LocationInfo>
              </Style.currentTemp>

              <Style.currentWeather>
                <img src={getWeatherIcon(weatherData.symbol)} alt={weatherData.symbol} />
              </Style.currentWeather>
              <Style.ConditionsInfo>
                Wind:{weatherData.windSpeed}m/s Pressure:{weatherData.pressure}hPa uV Index:
                {weatherData.uvIndex}
              </Style.ConditionsInfo>
            </Style.weatherCard>
          </section>
        </Style.WeatherWrapper>
      ))}
    </Style.Container>
  );
};

export default MultiWeather;
