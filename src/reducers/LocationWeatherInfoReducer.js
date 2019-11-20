import { GET_LOCATION_WEATHER_INFO } from 'actions';
import WeatherInfo from 'WeatherInfo';

const initState = {
  locationWeatherInfo: WeatherInfo[1],
};

const LocationWeatherInfoReducer = (state = initState, { type, ...props }) => {
  switch (type) {
    case GET_LOCATION_WEATHER_INFO: {
      return {locationWeatherInfo: WeatherInfo.find(el => el.location === props.location)};
    }
    default: {
      return state;
    }
  }
};

export default LocationWeatherInfoReducer;
