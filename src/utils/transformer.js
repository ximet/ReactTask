function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15);
}

function checkForEmptyObject(object) {
  return !(Object.entries(object).length === 0 && object.constructor === Object);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

export const TransformCityWeather = (weatherInfo) => {
  if (checkForEmptyObject(weatherInfo)) {
    return {
      name: weatherInfo.name,
      country: weatherInfo.sys.country,
      temperature: Math.round(kelvinToCelsius(weatherInfo.main.temp)),
      description: capitalizeFirstLetter(weatherInfo.weather[0].description),
      icon: weatherInfo.weather[0].icon,
      id: weatherInfo.id,
    };
  } return weatherInfo;
};
