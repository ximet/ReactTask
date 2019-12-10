const initState = {
  weatherData: {
    list:[]
  },
}
const AllWeatherInfoReducer = (state = initState, { type, ...props }) => {
  switch (type) {
    case 'ADD_ALL_WEATHER_DATA_TO_STORE': {
      return{
        weatherData: props.weatherData,
      }
    }
    default: {
      return state;
    }
  }
};

export default AllWeatherInfoReducer;
