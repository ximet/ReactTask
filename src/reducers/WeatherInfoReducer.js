import {GET_WEATHER_INFO} from 'actions';
import WeatherInfo from 'WeatherInfo';


const initState = {
  weatherInfo: WeatherInfo
}

const WeatherInfoReducer = (state = initState, {type, ...props}) => {
  switch (type) {
    case GET_WEATHER_INFO: {
      return {weatherInfo: WeatherInfo};//а потом вместо этого напишу fetch из API
    }
    default: {
      return state;
    }
  }
}

export default WeatherInfoReducer;
