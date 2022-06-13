import * as Style from './MultiCard.styles';

import dateToWeekdayHelper from '../../Utils/dateHelper';

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
        <Style.CardContainer key={selectedCity.id}>
          <Style.DeleteButton onClick={() => deleteCity(selectedCity)}>X</Style.DeleteButton>

          <section>
            name:{selectedCity.name}
            <Style.Description>{weatherData.temperature}C</Style.Description>
            <Style.Description>{weatherData.windSpeed} m/s</Style.Description>
            <Style.Description>{weatherData.symbolPhrase} </Style.Description>
            <Style.Description>{weatherData.relHumidity} Humidity</Style.Description>
            <Style.Description>{weatherData.uvIndex} uV Index</Style.Description>
            <Style.Description>{weatherData.pressure} hPA</Style.Description>
            <Style.Description>{dateToWeekdayHelper(weatherData.time)}</Style.Description>
          </section>
        </Style.CardContainer>
      ))}
    </Style.Container>
  );
};

export default MultiWeather;
