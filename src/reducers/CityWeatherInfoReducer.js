const initState = {
  cityWeatherData: {
    main: {
      temp: 0
    },
    clouds: {
      all: 0
    }
  }
}

const CityWeatherInfoReducer = (state = initState, { type, ...props }) => {
  switch (type) {
    case 'ADD_CITY_WEATHER_DATA_TO_STORE': {
      return{
        cityWeatherData: props.weatherData,
      }
    }
    default: {
      return state;
    }
  }
};

export default CityWeatherInfoReducer;
