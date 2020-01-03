import { weatherService } from 'services';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';
export const GET_WEATHER_ICON_REQUEST = 'GET_WEATHER_ICON_REQUEST';
export const GET_WEATHER_ICON_SUCCESS = 'GET_WEATHER_ICON_SUCCESS';
export const GET_WEATHER_ICON_FAILURE = 'GET_WEATHER_ICON_FAILURE';

export const getWeatherIcon = (iconName) => (dispatch) => {
  dispatch({
    type: GET_WEATHER_ICON_REQUEST,
  });

  weatherService
    .getWeatherIcon(iconName)
    .then(({ request: { responseURL } }) => {
      dispatch({
        type: GET_WEATHER_ICON_SUCCESS,
        payload: responseURL,
      });
      return responseURL;
    })
    .catch((err) => {
      dispatch({
        type: GET_WEATHER_ICON_FAILURE,
        payload: err.message,
      });
    });
};

export const getCurrentCityWeather = (location) => (dispatch) => {
  dispatch({
    type: GET_WEATHER_REQUEST,
  });

  weatherService
    .getCurrentCityWeather(location)
    .then(({
      data: {
        main, name, dt, weather, sys: { country },
      },
    }) => {
      const weatherData = {
        temperature: main.temp,
        city: name,
        country,
        time: new Date(dt).toLocaleString(),
        humidity: main.humidity,
        description: weather[0].description,
        iconName: weather[0].icon,
      };
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: weatherData,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_WEATHER_FAILURE,
        payload: err.message,
      });
    });
};
