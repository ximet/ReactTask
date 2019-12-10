import appWeatherConfig from 'appWeatherConfig.json';

export const CHANGE_TEMPERATURE_UNIT = 'CHANGE_TEMPERATURE_UNIT';
export const changeTemperatureUnit = {
  type: CHANGE_TEMPERATURE_UNIT,
};

export const ENABLE_LOADER = 'ENABLE_LOADER';
export const enableLoader = {
  type: ENABLE_LOADER,
};

export const DISABLE_LOADER = 'DISABLE_LOADER';
export const disableLoader = {
  type: DISABLE_LOADER,
};

function addAllWeatherDataToStore(weatherData){
  return {
    type:'ADD_ALL_WEATHER_DATA_TO_STORE',
    weatherData,
  }
}
function addCityWeatherDataToStore(weatherData){
  return {
    type:'ADD_CITY_WEATHER_DATA_TO_STORE',
    weatherData,
  }
}

const { cities, apiKey, apiSrc } = appWeatherConfig;
const citiesIdsString = cities.map(el => el.id).join(',');

export function fetchAllWeatherData() {
  return function (dispatch) {

    dispatch(enableLoader);
    
    fetch(`${apiSrc}group?id=${citiesIdsString}&units=metric&appid=${apiKey}`)
      .then(response => {
        response.json().then(data => {
          dispatch(addAllWeatherDataToStore(data));
          dispatch(disableLoader)
        });
      })
      .catch(error => {
        throw error;
      });
  }
}

export function fetchCityWeatherData(cityId) {
  return function (dispatch) {
    const lat = 53.9,
    lon = 27.57;

    dispatch(enableLoader);
    
    let fetchPath = cityId === 0?
    `${apiSrc}weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`:
    `${apiSrc}weather?id=${cityId}&units=metric&appid=${apiKey}`
    
    fetch(fetchPath)
    .then(response => {
      response.json().then(data => {
        dispatch(addCityWeatherDataToStore(data));
        dispatch(disableLoader)
      });
    })
    .catch(error => {
      throw error;
    });
  }
}
